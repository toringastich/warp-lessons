import{j as e,R as r,a as o}from"./styles-Co1da3D_.js";import{W as s,C as i,a as h,b as c,c as l,d,e as p,A as u}from"./WarpEmbed-CeVBNcZS.js";function a(n){const t={code:"code",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...n.components};return e.jsxs(e.Fragment,{children:[`
`,e.jsx(t.p,{children:`The cross product is usually introduced as a formula: the determinant of a
peculiar matrix with î, ĵ and k̂ written across the top row. The formula is
correct, and it computes the right thing. It is also close to the least
illuminating available answer to the question the cross product exists to
answer — which is a question about a shape.`}),`
`,e.jsx(t.h2,{children:"Two vectors span a parallelogram"}),`
`,e.jsxs(t.p,{children:["Here are ",e.jsx(t.code,{children:"v = (2, 1, 0)"})," and ",e.jsx(t.code,{children:"w = (−1, 2, 0)"}),`, both lying flat in the xy-plane.
Any two vectors drawn from the same point span a parallelogram, and the shaded
patch between these two is theirs. Drag inside the panel to orbit the scene and
look at the patch from a few angles.`]}),`
`,e.jsx(s,{state:i,height:480}),`
`,e.jsxs(t.p,{children:[`There are two things worth measuring about that patch, and between them they
exhaust what there is to say about it: `,e.jsx(t.strong,{children:"how big it is, and which way it faces."}),`
Its area, and the plane it lies in.`]}),`
`,e.jsxs(t.p,{children:[`The area is a single number, so that half is easy to record. The plane is more
awkward — a plane in three dimensions is not the sort of thing you write down as
one quantity. But there is a way around it. Rather than describing the plane,
describe the one direction `,e.jsx(t.em,{children:"perpendicular"}),` to it. A single perpendicular
direction pins a plane down completely, and a direction is just a vector.`]}),`
`,e.jsx(t.p,{children:`So we want to package two facts, an area and a perpendicular direction, into one
object. A vector will take both: let its length be the area, and let it point
along the perpendicular.`}),`
`,e.jsx(t.h2,{children:"One vector answers both"}),`
`,e.jsxs(t.p,{children:["That is exactly what the cross product is. The row ",e.jsx(t.code,{children:"u = cross(v, w)"}),` computes
`,e.jsx(t.code,{children:"(0, 0, 5)"}),"."]}),`
`,e.jsx(s,{state:h,height:480}),`
`,e.jsxs(t.p,{children:["It points straight up — perpendicular to ",e.jsx(t.code,{children:"v"}),", perpendicular to ",e.jsx(t.code,{children:"w"}),`, and so
perpendicular to the whole patch. That is the "which way does it face" half. And
`,e.jsx(t.code,{children:"norm(u)"}),` reads 5, which is precisely the parallelogram's area. That is the "how
big is it" half. One vector, both answers, exactly as we asked.`]}),`
`,e.jsxs(t.p,{children:[`The direction carries one further convention, because "perpendicular" leaves two
choices: up and down. The cross product settles it by the right-hand rule. Curl
the fingers of your right hand from `,e.jsx(t.code,{children:"v"})," toward ",e.jsx(t.code,{children:"w"}),`, and your thumb points along
`,e.jsx(t.code,{children:"u"}),`. This is worth testing — swap the two arguments, so the row reads
`,e.jsx(t.code,{children:"cross(w, v)"}),", and ",e.jsx(t.code,{children:"u"}),` turns to point the other way. The patch has not changed;
you are simply reading it from the other side.`]}),`
`,e.jsx(t.h2,{children:"It follows the parallelogram"}),`
`,e.jsxs(t.p,{children:["If ",e.jsx(t.code,{children:"u"}),` is genuinely a description of the patch, then it should track the patch
when the patch moves. Tilt `,e.jsx(t.code,{children:"w"}),` up out of the plane — change its third entry to
`,e.jsx(t.code,{children:"1"}),", so ",e.jsx(t.code,{children:"w = (−1, 2, 1)"})," — and the parallelogram tilts with it."]}),`
`,e.jsx(s,{state:c,height:480}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"u"})," has become ",e.jsx(t.code,{children:"(1, −2, 5)"}),`, leaning over by exactly enough to stay
perpendicular. The row `,e.jsx(t.code,{children:"dot(v, u)"}),` reads 0, and a dot product of zero is
precisely the statement that two vectors meet at a right angle, so that row is a
receipt: perpendicularity is not a lucky feature of the first example, it is
built into what the cross product computes.`]}),`
`,e.jsxs(t.p,{children:["Keep editing ",e.jsx(t.code,{children:"w"}),"'s entries and watch both facts survive. ",e.jsx(t.code,{children:"u"}),` stays perpendicular
to the patch, and its length stays equal to the patch's area.`]}),`
`,e.jsx(t.h2,{children:"When the parallelogram disappears"}),`
`,e.jsx(t.p,{children:"One case is left, and it turns out to give the cross product a second job."}),`
`,e.jsxs(t.p,{children:["Swing ",e.jsx(t.code,{children:"w"})," around until it points nearly the same way as ",e.jsx(t.code,{children:"v"}),`. The parallelogram
grows thinner as you go, because you are closing the angle between its two
sides. In the panel below the two vectors are about four degrees apart and the
patch is a splinter: `,e.jsx(t.code,{children:"norm(u)"})," has fallen to 0.8."]}),`
`,e.jsx(s,{state:l,height:480}),`
`,e.jsxs(t.p,{children:["Now make them exactly parallel. ",e.jsx(t.code,{children:"w"})," reads ",e.jsx(t.code,{children:"(4, 2.4, 0)"}),"; change the ",e.jsx(t.code,{children:"2.4"}),` to
`,e.jsx(t.code,{children:"2"})," and ",e.jsx(t.code,{children:"w"})," becomes exactly twice ",e.jsx(t.code,{children:"v"}),`. The patch loses its last scrap of area,
and `,e.jsx(t.code,{children:"u"}),` becomes the zero vector — it vanishes from the scene altogether, because
there is no longer a plane for it to be perpendicular to.`]}),`
`,e.jsxs(t.p,{children:["That is more useful than it may appear. ",e.jsx(t.code,{children:"cross(v, w) = 0"}),` is a test, and what it
tests is whether two vectors lie along the same line. It also explains the
formula for the length, which I have been quietly relying on. The area of a
parallelogram is base times height, and for these two sides that comes to
|v||w|sinθ, where θ is the angle between them. As θ closes to zero the sine goes
with it, and so does the area, and so does `,e.jsx(t.code,{children:"u"}),`. When θ is a right angle the sine
is 1 and the area is simply |v||w|.`]}),`
`,e.jsx(t.h2,{children:"Now it's yours"}),`
`,e.jsxs(t.p,{children:["A blank copy of Warp, in 3D. Add two vectors from the ",e.jsx(t.strong,{children:"+"}),` menu and type
`,e.jsx(t.code,{children:"cross(v, w)"})," into an expression row."]}),`
`,e.jsx(t.p,{children:"Some things worth going after:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["Cross two perpendicular unit vectors — ",e.jsx(t.code,{children:"(1, 0, 0)"})," and ",e.jsx(t.code,{children:"(0, 1, 0)"}),`. The area
is exactly 1, and the answer is the third axis. That is where the familiar
î × ĵ = k̂ comes from, and it is a special case rather than a definition.`]}),`
`,e.jsxs(t.li,{children:["Put ",e.jsx(t.code,{children:"cross(v, w)"})," and ",e.jsx(t.code,{children:"cross(w, v)"}),` in two rows at once and compare them. Same
length, opposite direction.`]}),`
`,e.jsxs(t.li,{children:["Double the length of ",e.jsx(t.code,{children:"v"})," and watch what the area does. Then double both ",e.jsx(t.code,{children:"v"}),`
and `,e.jsx(t.code,{children:"w"})," and watch it again."]}),`
`,e.jsxs(t.li,{children:["Add a third vector and compute ",e.jsx(t.code,{children:"dot(u, cross(v, w))"}),`. That number is the
volume of the box the three of them span, and it is zero exactly when all
three lie in one common plane — the three-dimensional echo of a parallelogram
with no area.`]}),`
`]}),`
`,e.jsx(t.p,{children:"The cross product, in the end, is a parallelogram packaged as a vector."}),`
`,e.jsx(s,{state:d,height:560}),`
`,e.jsx("p",{className:"article-cta",children:e.jsx("a",{href:p,children:"Open the full sandbox →"})})]})}function w(n={}){const{wrapper:t}=n.components||{};return t?e.jsx(t,{...n,children:e.jsx(a,{...n})}):a(n)}r.createRoot(document.getElementById("root")).render(e.jsx(o.StrictMode,{children:e.jsx(u,{title:"The Cross Product",subtitle:"A vector that measures a parallelogram — in 3D",date:"Summer 2026",children:e.jsx(w,{})})}));
