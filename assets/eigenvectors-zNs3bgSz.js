import{j as e,R as a,a as o}from"./styles-Co1da3D_.js";import{W as i,E as r,k as h,l,m as d,n as c,o as g,e as p,A as x}from"./WarpEmbed-CeVBNcZS.js";function s(t){const n={code:"code",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...t.components};return e.jsxs(e.Fragment,{children:[`
`,e.jsxs(n.p,{children:["The definition of an eigenvector fits on a single line. A vector ",e.jsx(n.code,{children:"v"}),` is an
eigenvector of a matrix `,e.jsx(n.code,{children:"M"})," when ",e.jsx(n.code,{children:"M·v = λv"})," for some number λ."]}),`
`,e.jsxs(n.p,{children:[`As definitions go that one is admirably compact, and it is also very nearly
opaque, because it manages to hide the only thing worth knowing: what these
vectors `,e.jsx(n.em,{children:"are"}),`. So we will not start from the definition. We will start by
watching a matrix push the plane around, and see whether anything survives.`]}),`
`,e.jsx(n.h2,{children:"A matrix moves every vector"}),`
`,e.jsxs(n.p,{children:["Here is a matrix ",e.jsx(n.code,{children:"M"}),` and what it does to the plane. The grid is not decoration —
it `,e.jsx(n.em,{children:"is"})," space, and ",e.jsx(n.code,{children:"M"})," is warping all of it at once. The vector ",e.jsx(n.code,{children:"v = (1, 0)"}),` has
been put in to ride along. Press play on the matrix row and watch where it ends
up.`]}),`
`,e.jsx(i,{state:r,height:460}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"v"}),` began pointing due east and it finishes pointing somewhere else. That is
unremarkable, and it is also the general case: hand a matrix a direction and you
get a different direction back. Edit `,e.jsx(n.code,{children:"v"}),`'s entries and play it again, and again,
and the same thing keeps happening. A matrix moves everything.`]}),`
`,e.jsx(n.p,{children:"Almost everything."}),`
`,e.jsx(n.h2,{children:"The directions that survive"}),`
`,e.jsxs(n.p,{children:["Asking for ",e.jsx(n.code,{children:"eigen(M)"}),` asks Warp for the exceptions. It draws two dashed lines
through the origin, and at first glance they are two lines among infinitely
many.`]}),`
`,e.jsx(i,{state:h,height:460}),`
`,e.jsxs(n.p,{children:[`They are not. Of all the lines through the origin — and there is one for every
direction you could pick — those two are the only ones this particular warp
leaves where they are. A vector lying along one of them does not get turned when
`,e.jsx(n.code,{children:"M"})," is applied. It only gets longer or shorter, by a factor Warp labels λ."]}),`
`,e.jsxs(n.p,{children:[`Play the animation and keep your eye on the orange and purple arrows. Space
swirls around them, and they stay on their lines and change length. Those two
directions are the `,e.jsx(n.strong,{children:"eigenvectors"})," of ",e.jsx(n.code,{children:"M"}),`, and the two factors are its
`,e.jsx(n.strong,{children:"eigenvalues"}),"."]}),`
`,e.jsxs(n.p,{children:[`Which means the definition we started with is now a description rather than a
rule. `,e.jsx(n.code,{children:"M·v = λv"})," says that applying ",e.jsx(n.code,{children:"M"})," to ",e.jsx(n.code,{children:"v"}),` has the same effect as scaling
`,e.jsx(n.code,{children:"v"}),` by some number — and "the same effect as scaling" is exactly what it means
for a vector not to be turned.`]}),`
`,e.jsx(n.h2,{children:"Check it with your own vector"}),`
`,e.jsxs(n.p,{children:["There is no need to take the dashed lines' word for any of this. Here ",e.jsx(n.code,{children:"v = (1, 1)"}),`
sits exactly on one of them, and the row `,e.jsx(n.code,{children:"u = M·v"}),` computes where it lands:
`,e.jsx(n.code,{children:"(3, 3)"}),". The same direction, three times as long. So λ = 3, in the flesh."]}),`
`,e.jsx(i,{state:l,height:460}),`
`,e.jsxs(n.p,{children:["Now push ",e.jsx(n.code,{children:"v"})," off the line — change its second entry to ",e.jsx(n.code,{children:"0.2"}),` — and look at where
`,e.jsx(n.code,{children:"u"})," goes. It is no longer parallel to ",e.jsx(n.code,{children:"v"}),`, which we expected. What is worth
noticing is `,e.jsx(n.em,{children:"which way"})," it isn't parallel: ",e.jsx(n.code,{children:"u"}),` has been dragged back towards the
eigen-line. `,e.jsx(n.code,{children:"v"})," was sitting about 34° away from that line and ",e.jsx(n.code,{children:"u"}),` comes out only
about 12° away.`]}),`
`,e.jsxs(n.p,{children:["There is a tidy reason. Split ",e.jsx(n.code,{children:"v"}),` into the part lying along the eigen-line and
the part sticking out sideways. `,e.jsx(n.code,{children:"M"}),` triples the first part, being the λ = 3
direction, and leaves the second part exactly as it was, being the λ = 1
direction. The sideways part therefore ends up three times smaller `,e.jsx(n.em,{children:"relative"}),` to
the along-the-line part than it started, which is to say `,e.jsx(n.code,{children:"u"}),` is three times
closer to the line than `,e.jsx(n.code,{children:"v"})," was. Put ",e.jsx(n.code,{children:"v"}),` back on the line and the sideways part
is zero, three times zero is still zero, and `,e.jsx(n.code,{children:"u"})," lies along ",e.jsx(n.code,{children:"v"})," again."]}),`
`,e.jsx(n.p,{children:`So the two eigen-lines are not merely curiosities that survive the warp. They
organise what happens to everything else. Hold on to that; it is the whole of
the last section.`}),`
`,e.jsxs(n.p,{children:[`And everything else in this corner of the subject — the characteristic
polynomial, `,e.jsx(n.code,{children:"det(M − λI) = 0"}),`, the algebra you will grind through on a problem
set — is bookkeeping for `,e.jsx(n.em,{children:"finding"})," these two lines. The lines are the content."]}),`
`,e.jsx(n.h2,{children:"When nothing survives"}),`
`,e.jsx(n.p,{children:`That last section quietly assumed something we ought to check. We found two
special lines. Must there always be two? Must there be any at all?`}),`
`,e.jsx(n.p,{children:`Think about what an eigen-line asks for: a direction the transformation declines
to turn. Then think about a rotation, whose entire job is to turn every
direction there is.`}),`
`,e.jsx(i,{state:d,height:460}),`
`,e.jsxs(n.p,{children:["The matrix in this panel rotates the plane by about 53°, and ",e.jsx(n.code,{children:"eigen(M)"}),` reports
no lines whatsoever — only a complex pair, λ = 0.6 ± 0.8i, and a note that there
are no real eigenvectors. Nothing has gone wrong with the matrix. It simply has
no direction that survives, because turning every direction is precisely what it
does. Press play and watch `,e.jsx(n.code,{children:"v"}),` sweep around; there is nowhere it could have
stopped.`]}),`
`,e.jsxs(n.p,{children:[`So eigenvectors are not guaranteed, and their number is part of what a matrix
tells you about itself. A rotation has none. Type a shear into `,e.jsx(n.code,{children:"M"})," — ",e.jsx(n.code,{children:"1"}),", ",e.jsx(n.code,{children:"1"}),`,
`,e.jsx(n.code,{children:"0"}),", ",e.jsx(n.code,{children:"1"}),` — and exactly one line survives instead of two, with a repeated
eigenvalue. Type the identity, which moves nothing at all, and `,e.jsx(n.em,{children:"every"}),` direction
survives.`]}),`
`,e.jsx(n.h2,{children:"Why the lines are worth finding"}),`
`,e.jsx(n.p,{children:"So far this is a fact about a matrix. Here is why anyone goes looking for it."}),`
`,e.jsxs(n.p,{children:[`Suppose you apply the same matrix over and over, which is what happens whenever
a matrix describes one step of some process and you want to know where the
process ends up after many steps. In general that is a lot of arithmetic. On an
eigen-line it is no arithmetic at all: applying `,e.jsx(n.code,{children:"M"}),` multiplies the length by λ,
so applying it three times multiplies the length by λ³, and there is nothing
else to work out.`]}),`
`,e.jsxs(n.p,{children:["The panel below has an ",e.jsx(n.code,{children:"M"}),` whose eigenvalues are 1.5 and 0.5, together with
`,e.jsx(n.code,{children:"C = M·M·M"})," — the single matrix that applies ",e.jsx(n.code,{children:"M"}),` three times. Before you press
play, work out what ought to happen to each of the two eigen-arrows.`]}),`
`,e.jsx(i,{state:c,height:460}),`
`,e.jsx(n.p,{children:`The orange arrow, on the λ = 1.5 line, has grown by 1.5³, which is about 3.4.
The purple one, on the λ = 0.5 line, has shrunk by 0.5³ = 0.125 and is now a
stub near the origin. Neither has left its line, which we already knew it
wouldn't.`}),`
`,e.jsxs(n.p,{children:[`The part worth keeping is what happened to the gridlines. They have piled up
along the orange line — which is the same effect you saw one section ago, when a
single application dragged `,e.jsx(n.code,{children:"u"}),` three times closer to the eigen-line, now applied
three times over. Each round divides the sideways part by three again, and after
enough rounds there is essentially nothing left of it. Repeated application
squashes the whole plane toward whichever eigen-direction has the largest λ,
because that direction outgrows every other one, and the ratio of the two
eigenvalues sets how fast it happens.`]}),`
`,e.jsx(n.p,{children:`That is the practical reason eigenvectors are worth finding. They are the
directions in which repeated application is nothing more than repeated
multiplication, and the largest eigenvalue is the one that eventually wins.`}),`
`,e.jsx(n.h2,{children:"Now it's yours"}),`
`,e.jsxs(n.p,{children:["A blank copy of Warp. Add a matrix from the ",e.jsx(n.strong,{children:"+"})," menu, then type ",e.jsx(n.code,{children:"eigen(M)"}),`
into an expression row. If Warp is new to you, the `,e.jsx(n.strong,{children:"Tutorial"}),` button gives a
short tour.`]}),`
`,e.jsx(n.p,{children:"Some things worth going after:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["A matrix with a ",e.jsx(n.strong,{children:"negative"}),` eigenvalue. The line survives, so vectors on it
aren't turned aside — but they come back pointing the other way along it.
Reconcile that with "not turned" until it sits comfortably.`]}),`
`,e.jsxs(n.li,{children:["A matrix with an eigenvalue of exactly ",e.jsx(n.strong,{children:"0"}),`. That eigen-line is where space
gets crushed to nothing. Add `,e.jsx(n.code,{children:"det(M)"})," and ",e.jsx(n.code,{children:"inv(M)"}),` and see whether they agree
with you about what has happened.`]}),`
`,e.jsxs(n.li,{children:["A matrix whose two eigenvalues are ",e.jsx(n.strong,{children:"equal"}),` without it being a multiple of
the identity. One line survives where you might have expected two.`]}),`
`,e.jsxs(n.li,{children:["Take any matrix, build ",e.jsx(n.code,{children:"C = M·M·M·M"}),`, and see how nearly its gridlines fall
onto the dominant eigen-line. Then try it with a matrix whose two eigenvalues
are close in size, and watch the effect weaken.`]}),`
`]}),`
`,e.jsx(i,{state:g,height:560,tutorial:!0}),`
`,e.jsx("p",{className:"article-cta",children:e.jsx("a",{href:p,children:"Open the full sandbox →"})})]})}function u(t={}){const{wrapper:n}=t.components||{};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}a.createRoot(document.getElementById("root")).render(e.jsx(o.StrictMode,{children:e.jsx(x,{title:"Eigenvectors",subtitle:"The vectors that refuse to turn",date:"Summer 2026",children:e.jsx(u,{})})}));
