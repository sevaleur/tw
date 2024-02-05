uniform float u_alpha; 
uniform float u_state; 
uniform float u_time;
uniform float u_width; 
uniform float u_radius; 
uniform float u_leaveState; 

uniform vec2 u_planeSize; 
uniform vec2 u_imageSize; 
uniform vec2 u_viewportSize; 

uniform sampler2D tMap; 
uniform sampler2D tHover; 
uniform sampler2D displacement;

varying vec2 v_uv; 
varying vec3 v_position; 

void main()
{
  vec2 ratio = vec2(
    min((u_planeSize.x / u_planeSize.y) / (u_imageSize.x / u_imageSize.y), 1.0), 
    min((u_planeSize.y / u_planeSize.x) / (u_imageSize.y / u_imageSize.x), 1.0)
  ); 

  vec2 uv = vec2(
    v_uv.x * ratio.x + (1.0 - ratio.x) * 0.5, 
    v_uv.y * ratio.y + (1.0 - ratio.y) * 0.5
  ); 

  vec2 center = vec2(0.5, 0.5);

  float dist = 1.0 - distance(v_position.xy, vec2(0.0));
  float delta = fwidth(dist);
  float alpha = u_alpha - smoothstep(0.6 - delta, 0.5, dist);

  vec4 noise = texture2D(displacement, v_uv + (u_time * 0.02)) * alpha;
  float state = u_state * 0.66 + noise.g * 0.04;

  float circ = 1.0 - smoothstep(-u_width, 0.0, u_radius * distance(center * ratio, v_uv * ratio) - state * ( 1. + u_width ));
  float interpolation = pow(abs(circ), 1.0);

  vec4 t1 = texture2D( tMap, (uv - 0.5) * (1.0 - interpolation) + 0.5 ) * alpha;
  vec4 t2 = texture2D( tHover, (uv - 0.5) * interpolation + 0.5 ) * alpha;

  if(u_leaveState == 1.0)
  {
    t2 = vec4(1.,0.918,0.859, u_alpha);
  }

  gl_FragColor = mix( t1, t2, interpolation );
  gl_FragColor.a = alpha;
}