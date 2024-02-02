uniform float u_alpha; 
uniform float u_state; 
uniform float u_time;
uniform float u_width; 
uniform float u_radius; 

uniform vec2 u_planeSize; 
uniform vec2 u_imageSize; 
uniform vec2 u_viewportSize; 

uniform sampler2D tMap; 
uniform sampler2D tHover; 
uniform sampler2D displacement;

varying vec2 v_uv; 

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

  vec2 center = vec2(0.5,0.5);

  vec4 noise = texture2D(displacement, v_uv + (u_time * 0.02));
  float state = u_state * 0.66 + noise.g * 0.04;

  float circ = 1.0 - smoothstep(-u_width, 0.0, u_radius * distance(center * ratio, v_uv * ratio) - state * ( 1. + u_width ));
  float interpolation = pow(abs(circ), 1.);

  vec4 t1 = texture2D( tMap, (uv - 0.5) * (1.0 - interpolation) + 0.5 );
  vec4 t2 = texture2D( tHover, (uv - 0.5) * interpolation + 0.5 );

  gl_FragColor = mix( t1, t2, interpolation );
  gl_FragColor.a = u_alpha;
}