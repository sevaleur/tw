uniform float u_alpha; 
uniform float u_state; 

uniform vec2 u_planeSize; 
uniform vec2 u_imageSize; 
uniform vec2 u_viewportSize; 

uniform sampler2D tMap; 
uniform sampler2D u_hoverImage; 

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

  vec2 p = -1.0 + 2.0 * uv; 
  float len = length(p);

  float circle = 1.0 - step(0.5, length(v_position.xy));
  vec4 image = texture2D(tMap, uv) * circle; 
  vec4 hoverImage = texture2D(u_hoverImage, uv) * circle; 

  float fade = smoothstep(u_state, u_state, len);

  vec4 final = mix(image, hoverImage, fade);

  gl_FragColor = image;
}