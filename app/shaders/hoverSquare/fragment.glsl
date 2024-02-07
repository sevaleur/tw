uniform float uAlpha; 
uniform float uState; 
uniform float uTime;
uniform float uWidth; 
uniform float uRadius;  
uniform float uLeaveState; 

uniform vec2 uPlaneSize; 
uniform vec2 uImageSize; 
uniform vec2 uViewportSize; 

uniform sampler2D tMap; 
uniform sampler2D tHover; 
uniform sampler2D tDisplacement;

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

  vec2 center = vec2(0.5, 0.5);

  vec4 noise = texture2D(tDisplacement, vUv + (uTime * 0.02));
  float state = uState * 0.66 + noise.g * 0.04;

  float calcSquare = 1.0 - smoothstep(
    -uWidth, 
    0.0,
    uRadius * max(
      abs(distance(center.x * ratio.x, vUv.x * ratio.x)), 
      abs(distance(center.y * ratio.y, vUv.y * ratio.y))) - state * (1.0 + uWidth)
    );

  float interpolation = pow(abs(calcSquare), 1.0);

  vec4 t1 = texture2D( tMap, (uv - 0.5) * (1.0 - interpolation) + 0.5 );
  vec4 t2 = texture2D( tHover, (uv - 0.5) * interpolation + 0.5 );

  if(uLeaveState == 1.0)
  {
    t2 = vec4(1.,0.918,0.859, uAlpha);
  }

  gl_FragColor = mix( t1, t2, interpolation );
  gl_FragColor.a = uAlpha;
}