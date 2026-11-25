B=open('plane.svgfrag').read()
def flag(gap):
    a=(1024-gap)//2; b=a+gap
    return f'<rect width="1024" height="1024" fill="#FFFFFF"/><rect x="0" y="0" width="{a}" height="{a}" fill="#002D62"/><rect x="{b}" y="0" width="{a}" height="{a}" fill="#CE1126"/><rect x="0" y="{b}" width="{a}" height="{a}" fill="#CE1126"/><rect x="{b}" y="{b}" width="{a}" height="{a}" fill="#002D62"/>'
def svg(body): return f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="1024" height="1024">{body}</svg>'
def g(scale,inner): return f'<g transform="translate(512 512) scale({scale}) translate(-512 -512)">{inner}</g>'
open('icon.svg','w').write(svg(flag(160)+'<circle cx="512" cy="512" r="300" fill="#FFFFFF"/>'+g(0.78,B)))
open('fg.svg','w').write(svg('<circle cx="512" cy="512" r="260" fill="#FFFFFF"/>'+g(0.6,B)))
open('bg.svg','w').write(svg(flag(120)))
open('splash.svg','w').write(svg('<clipPath id="c"><rect x="112" y="112" width="800" height="800" rx="180"/></clipPath><g clip-path="url(#c)">'+g(0.78,flag(160))+'</g><circle cx="512" cy="512" r="230" fill="#FFFFFF"/>'+g(0.6,B)))

M='<g transform="rotate(45 512 512) translate(0 -40)"><g fill="#000"><path d="M512 236C537 236 550 272 550 304L550 700C550 742 532 784 512 796C492 784 474 742 474 700L474 304C474 272 487 236 512 236Z"/><path d="M550 420L800 556L800 612L550 548Z"/><path d="M474 420L224 556L224 612L474 548Z"/><path d="M548 690L650 748L650 784L540 766Z"/><path d="M476 690L374 748L374 784L484 766Z"/></g></g>'
open('mono.svg','w').write(svg(g(0.6,M)))
