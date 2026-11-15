B=open('bulb.svgfrag').read()
def flag(gap):
    a=(1024-gap)//2; b=a+gap
    return f'<rect width="1024" height="1024" fill="#FFFFFF"/><rect x="0" y="0" width="{a}" height="{a}" fill="#002D62"/><rect x="{b}" y="0" width="{a}" height="{a}" fill="#CE1126"/><rect x="0" y="{b}" width="{a}" height="{a}" fill="#CE1126"/><rect x="{b}" y="{b}" width="{a}" height="{a}" fill="#002D62"/>'
def svg(body): return f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="1024" height="1024">{body}</svg>'
def g(scale,inner): return f'<g transform="translate(512 512) scale({scale}) translate(-512 -512)">{inner}</g>'
open('icon.svg','w').write(svg(flag(160)+'<circle cx="512" cy="512" r="300" fill="#FFFFFF"/>'+g(0.78,B)))
open('fg.svg','w').write(svg('<circle cx="512" cy="512" r="260" fill="#FFFFFF"/>'+g(0.6,B)))
open('bg.svg','w').write(svg(flag(120)))
open('splash.svg','w').write(svg('<clipPath id="c"><rect x="112" y="112" width="800" height="800" rx="180"/></clipPath><g clip-path="url(#c)">'+g(0.78,flag(160))+'</g><circle cx="512" cy="512" r="230" fill="#FFFFFF"/>'+g(0.6,B)))
