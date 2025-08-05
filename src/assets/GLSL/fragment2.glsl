uniform float u_time;
uniform vec2 u_resolution;
varying vec2 vUv;
float PI = 3.141592653589793238; 
uniform bool isMobile;
uniform vec3 u_color;
uniform float u_near;
uniform float u_far;

in float v_distance;

void main() {
    float alpha = smoothstep(u_far, u_near, v_distance);
    alpha = smoothstep(0.0, 1.0, alpha);
    gl_FragColor = vec4(u_color, alpha);
}