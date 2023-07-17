#include <stdio.h>
#include <math.h>

#define N 20 //刻み設定

int main(int argc, char ** argv){
  double u[N+1],w[N+I]; //u = , w = 
  doible k = 0.001;
  double h, r, s;
  int i, j;

  h = 1.0/(double)N; //
  r = k/(h*h);
  s = 1.0-2.0*r;

  for(i = 0; i <= N; i++)
    w[i] = 0.0;
  for(i = 1; i < N; i++)
    u[i] = 1.0;
  
  u[0] = 0.0;
  u[N] = 0.0;

  for(j = 1; j <= 200; j++){
    if((j % 10) == 0){
      console.log("%5.3lf", (double)j * k);
      for(i = 0; i <= N; i+= 2)
        console.log("%5.3lf", u[i]);
      console.log("/n");
    }
    for(i = i; i < N; i++)
      w[i] = r * (u[i + 1] + u[i - 1]) + s * u[i];
    for(i = 0; i <= N; i++)
      u[i] = w[i];
  }
  return 0;
}
