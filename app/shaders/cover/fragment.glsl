uniform float uAlpha; 
uniform float uState; 

uniform vec2 uPlaneSize; 
uniform vec2 uImageSize; 
uniform vec2 uViewportSize; 

uniform sampler2D tMap; 

varying vec2 vUv; 
varying vec3 vPosition; 

void main()
{
  vec2 ratio = vec2(
    min((uPlaneSize.x / uPlaneSize.y) / (uImageSize.x / uImageSize.y), 1.0), 
    min((uPlaneSize.y / uPlaneSize.x) / (uImageSize.y / uImageSize.x), 1.0)
  ); 

  vec2 uv = vec2(
    vUv.x * ratio.x + (1.0 - ratio.x) * 0.5, 
    vUv.y * ratio.y + (1.0 - ratio.y) * 0.5
  );

  vec4 image = texture2D(tMap, uv);

  gl_FragColor = image;
  gl_FragColor.a = uAlpha;
}