import{j as e,R as o,a as s}from"./styles-Co1da3D_.js";import{W as a,D as r,f as h,g as d,h as l,i as c,j as m,e as u,A as p}from"./WarpEmbed-CeVBNcZS.js";function i(t){const n={code:"code",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...t.components};return e.jsxs(e.Fragment,{children:[`
`,e.jsx(n.p,{children:`A 2×2 matrix is four numbers. It is also a linear transformation: each column
is a vector, and the two of them together warp the gridlines of the plane.`}),`
`,e.jsx(n.p,{children:`Out of those four numbers one can build a fifth, called the determinant, and
this fifth number answers a surprising spread of questions. Whether the
transformation stretches space or shrinks it. Whether it turns space over.
Whether it flattens space onto a line. Whether it can be undone. That is a
great deal to ask of one number, and the reason one number can manage it is
that the four questions are not really four questions. Seeing why is the point
of this piece.`}),`
`,e.jsx(n.p,{children:`My name is Torin, and I just graduated from high school. In my senior calculus
class we used determinants mostly for symbol-pushing — a formula to apply, a
means to an end. Then 3Blue1Brown's videos showed me that a determinant is a
piece of geometry rather than a piece of arithmetic, and I wanted somewhere to
handle that geometry directly, the way you handle a function in Desmos. That is
why I built Warp, and why I am teaching with it here.`}),`
`,e.jsx(n.p,{children:`Every diagram below is a live copy of Warp. You can type into all of them, and
you will get considerably more out of this if you do.`}),`
`,e.jsx(n.h2,{children:"The one number is an area"}),`
`,e.jsxs(n.p,{children:[`Start in the plane. A matrix takes the unit square — one unit wide, one unit
tall, area exactly 1 — and carries it to a parallelogram. In the panel below
`,e.jsx(n.code,{children:"M"}),` is doing precisely that: the shaded patch is where the unit square has
landed, and the row beneath it reports `,e.jsx(n.code,{children:"det(M)"}),", which to start reads 6."]}),`
`,e.jsx(a,{state:r}),`
`,e.jsxs(n.p,{children:[`The square we began with had area 1, and the parallelogram it became has area
6. So `,e.jsx(n.code,{children:"det(M)"})," is not merely ",e.jsx(n.em,{children:"associated"}),` with that area — it is that area. And
because the square started at area 1, the same number is also a `,e.jsx(n.em,{children:"factor"}),`:
whatever region you hand this transformation, it comes back six times larger.
That is the whole content of the determinant. `,e.jsx(n.strong,{children:`It is the factor by which a
transformation scales area.`})]}),`
`,e.jsxs(n.p,{children:["This is worth confirming rather than believing. Click any entry of ",e.jsx(n.code,{children:"M"}),` and type
something else. The patch shears or stretches, and `,e.jsx(n.code,{children:"det(M)"}),` moves with it. Try
for a matrix with a small determinant, then one with a large determinant, and
watch the patch shrink and swell to match.`]}),`
`,e.jsx(n.h2,{children:"Zero, and the far side of zero"}),`
`,e.jsx(n.p,{children:`If the determinant is an area, then we ought to ask what it would mean for the
determinant to be zero. An area of zero is a region with no interior —
something crushed perfectly flat.`}),`
`,e.jsx(n.p,{children:`The matrix in the next panel has determinant −1, and its play button walks the
transformation gradually from where it starts to where it finishes. Watch the
grid on the way. You can replay it as often as you like, or drag the slider and
stop anywhere in the middle.`}),`
`,e.jsx(a,{state:h}),`
`,e.jsx(n.p,{children:`Halfway through, the entire grid thins to a single line. That is the instant the
determinant passes through zero: the plane has been flattened onto one
dimension, and every region in it has been left with no area at all. Carry on
and space reopens on the far side, mirror-reversed.`}),`
`,e.jsxs(n.p,{children:[`Which gives us the second thing the determinant knows, and it arrives for free
with the first. A negative area is a peculiar object if you think of area as a
quantity, and a perfectly sensible one if you think of it as area `,e.jsx(n.em,{children:`together
with an orientation`}),`. A positive determinant leaves space oriented the way it
was. A negative one turns space over, the way a mirror exchanges left and
right. Zero is the knife-edge between them, where space has been squeezed hard
enough to lose a dimension. The size of the determinant tells you how much the
area changed; its sign tells you whether space was turned over on the way.
Retype the matrix and play it again — some transformations turn space over and
some don't.`]}),`
`,e.jsx(n.h2,{children:"In three dimensions it is a volume"}),`
`,e.jsxs(n.p,{children:[`None of that was special to the plane. In three dimensions the unit square
becomes the unit `,e.jsx(n.em,{children:"cube"}),`, area becomes volume, and the determinant becomes the
factor by which volume is scaled. Nothing else about the argument changes.`]}),`
`,e.jsx(a,{state:d,height:520}),`
`,e.jsxs(n.p,{children:[`Drag inside the panel to orbit the scene. The cube of volume 1 has landed as a
slanted box — a parallelepiped — and its volume is what `,e.jsx(n.code,{children:"det(M)"}),` reports, which
begins at 2. A determinant of zero here would mean that box had been crushed
flat onto a plane, or a line, or a single point: volume gone.`]}),`
`,e.jsx(n.p,{children:`Change the entries, press play, and watch the box and its volume move together.
It is the same idea as before, with one more direction to move in.`}),`
`,e.jsx(n.h2,{children:"Why det(A·B) = det(A) · det(B)"}),`
`,e.jsxs(n.p,{children:[`Here is a fact that looks like algebra and is really geometry. Apply one
transformation and then apply another. The first scales area by its
determinant; the second scales whatever it is handed by `,e.jsx(n.em,{children:"its"}),` determinant. Two
scalings applied in turn simply multiply. So the determinant of the combined
transformation has no choice but to be the product of the two.`]}),`
`,e.jsx(n.p,{children:`That argument is already complete. What I would rather do than defend it is let
you watch it happen.`}),`
`,e.jsx(a,{state:l,height:520}),`
`,e.jsxs(n.p,{children:["The panel above has three rows: ",e.jsx(n.code,{children:"M"}),", ",e.jsx(n.code,{children:"N"}),", and their product ",e.jsx(n.code,{children:"C = M·N"}),". ",e.jsx(n.code,{children:"C"}),` is
the single transformation you get by doing `,e.jsx(n.code,{children:"N"})," first and ",e.jsx(n.code,{children:"M"}),` second, and its
play button walks through that combination one factor at a time — first `,e.jsx(n.code,{children:"N"}),`
warps space, scaling area by its determinant, then `,e.jsx(n.code,{children:"M"}),` lands on top of the
result, scaling by its own. To start, `,e.jsx(n.code,{children:"det(M)"})," is 2, ",e.jsx(n.code,{children:"det(N)"}),` is 3, and
`,e.jsx(n.code,{children:"det(C)"})," is 6."]}),`
`,e.jsxs(n.p,{children:["To take the product apart, click the small circle to the left of ",e.jsx(n.code,{children:"M"}),`, or of
`,e.jsx(n.code,{children:"N"}),`. That makes just the one matrix warp space, so you can read its determinant
on its own; clicking back on `,e.jsx(n.code,{children:"C"}),` puts them together again. However you
rearrange the numbers, the determinant of the product is the two determinants
multiplied, and being able to watch that hold for anything you type is a more
convincing kind of proof than a page of algebra. If you want a harder case, the
plus button will add a third matrix to fold into the product.`]}),`
`,e.jsx(n.h2,{children:"When can a matrix be undone?"}),`
`,e.jsx(n.p,{children:`Now the question this piece has been circling. A transformation can be undone
when every landing spot came from exactly one starting point, since only then is
there something unambiguous to go back to.`}),`
`,e.jsx(n.p,{children:"Consider what a determinant of zero does to that requirement."}),`
`,e.jsx(a,{state:c}),`
`,e.jsxs(n.p,{children:["In the panel ",e.jsx(n.code,{children:"det(M)"}),` is 0 and the grid has collapsed onto a single line. Pick
any point on that line. A whole line's worth of starting points has been mapped
onto it, stacked one on top of another, and nothing in the picture distinguishes
them from each other. Which one did you come from? The question has no answer,
because the information that would have answered it was destroyed in the
flattening. The row `,e.jsx(n.code,{children:"inv(M)"})," says as much outright: not invertible."]}),`
`,e.jsxs(n.p,{children:[`So a matrix can be undone exactly when its determinant is not zero. I would
rather you didn't file that away as a rule. A determinant of zero means space
was flattened; flattening loses information; lost information cannot be
recovered. Each of those steps is unremarkable on its own, and together they
are the entire reason. Nudge an entry so the determinant leaves zero, and watch
`,e.jsx(n.code,{children:"inv(M)"})," come back to life."]}),`
`,e.jsx(n.p,{children:`Notice, too, that we have now answered all four of the questions from the
opening with the same number — because, as promised, they were never four
questions. How much does a transformation scale area? The determinant. Does it
turn space over? The sign of the determinant. Does it flatten space? The
determinant is zero. Can it be undone? The determinant is not zero.`}),`
`,e.jsx(n.h2,{children:"Now it's yours"}),`
`,e.jsxs(n.p,{children:["A blank copy of Warp. Add a matrix from the ",e.jsx(n.strong,{children:"+"})," menu, type ",e.jsx(n.code,{children:"det(M)"}),` into an
expression row, and see what you can find out. If Warp is new to you, the
`,e.jsx(n.strong,{children:"Tutorial"})," button gives a short tour."]}),`
`,e.jsx(n.p,{children:"A few things worth going after:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:`A matrix with determinant exactly 1 that isn't the identity. A shear will do
it: every vector moves, and no area changes at all, which is worth sitting
with for a moment.`}),`
`,e.jsx(n.li,{children:`A matrix with determinant 0 in which none of the four entries is 0. Flatness
is a relationship between the columns, not a property of any single number.`}),`
`,e.jsx(n.li,{children:`Push a determinant below zero and scrub the slider slowly through the middle,
to catch the moment the grid passes through flat.`}),`
`,e.jsxs(n.li,{children:["Switch to 3D and hunt for a ",e.jsx(n.code,{children:"3×3"}),` matrix whose determinant is zero — the
instant the box goes flat. Then ask `,e.jsx(n.code,{children:"inv(M)"})," what it makes of it."]}),`
`]}),`
`,e.jsx(a,{state:m,height:560,tutorial:!0}),`
`,e.jsx("p",{className:"article-cta",children:e.jsx("a",{href:u,children:"Open the full sandbox →"})})]})}function f(t={}){const{wrapper:n}=t.components||{};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}o.createRoot(document.getElementById("root")).render(e.jsx(s.StrictMode,{children:e.jsx(p,{title:"The Determinant",subtitle:"The number that measures a matrix",date:"Summer 2026",children:e.jsx(f,{})})}));
