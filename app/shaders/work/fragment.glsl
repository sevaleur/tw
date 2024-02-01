uniform float u_alpha; 

uniform vec2 u_planeSize; 
uniform vec2 u_imageSize; 
uniform vec2 u_viewportSize; 

uniform sampler2D tMap; 

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

  vec4 image = texture2D(tMap, uv); 

  gl_FragColor = image; 
  gl_FragColor.a = u_alpha; 
}