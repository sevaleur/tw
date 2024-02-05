uniform float u_scroll; 
uniform float u_time; 
uniform float u_alpha;

varying vec2 v_uv; 

float rand(vec2 n) 
{ 
    return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
}

float noise(vec2 p)
{
    vec2 ip = floor(p);
    vec2 u = fract(p);
    u = u*u*(3.0-2.0*u);

    float res = mix(
      mix(rand(ip),rand(ip+vec2(1.0,0.0)),u.x),
      mix(rand(ip+vec2(0.0,1.0)),rand(ip+vec2(1.0,1.0)),u.x),u.y);
      return res*res;
}

const mat2 mtx = mat2( 0.80,  0.60, -0.60,  0.80 );

float fbm( vec2 p )
{
  float f = 0.0;

  f += 0.500000*noise( p + (u_scroll + (u_time * 0.25)) ); p = mtx*p*2.02;
  f += 0.031250*noise( p ); p = mtx*p*2.01;
  f += 0.250000*noise( p ); p = mtx*p*2.03;
  f += 0.125000*noise( p ); p = mtx*p*2.01;
  f += 0.062500*noise( p ); p = mtx*p*2.04;
  f += 0.015625*noise( p + sin(u_scroll) );

  return f/0.96875;
}

float pattern( vec2 p )
{
	return fbm( p + fbm( p + fbm( p ) ) );
}

void main()
{
  vec4 jungleGreen = vec4(0.082, 0.145, 0.176, u_alpha);
  vec4 aerospaceOrange = vec4(0.988, 0.322, 0.0, u_alpha); 
  vec4 antiqueWhite = vec4(1.,0.918,0.859, u_alpha);


  float shade = pattern(v_uv); 

  vec4 final = mix(antiqueWhite, aerospaceOrange, shade * (u_scroll * 0.5));

  gl_FragColor = final;
}