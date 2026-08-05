import{j as e,R as a,a as o}from"./styles-Co1da3D_.js";import{W as n,S as r,p as h,t as l,q as d,u as c,r as u,v as g,s as w,e as p,A as m}from"./WarpEmbed-CeVBNcZS.js";function i(s){const t={code:"code",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...s.components};return e.jsxs(e.Fragment,{children:[`
`,e.jsx(t.p,{children:`Take any 2×2 matrix you like — any four numbers at all — and ask what it does to
the unit circle. The answer, every single time, is an ellipse. Never a peanut,
never an egg, never a shape fatter at one end than the other.`}),`
`,e.jsxs(t.p,{children:[`The panel below is a live copy of Warp; it plays itself once so you can watch the
circle go, and then it's yours. The dashed outline it leaves behind is where the
circle started, so you can always see what changed. Click any entry of `,e.jsx(t.code,{children:"M"}),` and
put whatever you want in its place. See if you can produce something that isn't
an ellipse.`]}),`
`,e.jsx(n,{state:r}),`
`,e.jsx(t.p,{children:`You won't manage it, and I want to dwell for a moment on how odd that is. A
matrix is four entries you may set quite independently, which is a good deal of
freedom, and yet whatever you do with that freedom the circle comes back an
ellipse. Something is quietly limiting what a matrix is allowed to do.`}),`
`,e.jsxs(t.p,{children:[`By the end of this piece you'll know what. On the way we'll meet the two numbers
hidden inside every matrix that settle which ellipse you get. They are called the
`,e.jsx(t.em,{children:"singular values"}),`, and they turn out to explain what the determinant has been
measuring all along, to say how close a matrix is to being impossible to undo,
and to let you look at four unhelpful numbers and see at a glance what they do.`]}),`
`,e.jsx(t.h2,{children:"The ellipse has two axes, and those are the numbers"}),`
`,e.jsx(t.p,{children:`An ellipse is not a shapeless blob. It has a long direction and a short one, at
right angles to each other, with a definite length along each. Tell me those two
lengths and the angle they sit at and I can draw your ellipse exactly; there is
nothing else about it to know.`}),`
`,e.jsxs(t.p,{children:[`That is an encouraging thought, because it means the ellipse in the last panel is
carrying only a few numbers' worth of information — and if we can find those
numbers, we will have found what the matrix is really doing. The panel below is
the same matrix with one row added, `,e.jsx(t.code,{children:"svd(M)"}),`, whose name will make sense shortly.
It reports two numbers, σ₁ and σ₂. Decide what you think they are before you read
further; the orange and purple arrows are drawn to help.`]}),`
`,e.jsx(n,{state:h}),`
`,e.jsxs(t.p,{children:[`They are the semi-axes. σ₁ is how far the ellipse reaches along its long
direction, σ₂ how far along its short one. Now drag the animation slider back to
the beginning and look at what those two arrows were `,e.jsx(t.em,{children:"before"}),` the matrix got hold
of them: a perpendicular pair of unit vectors sitting on the circle. So the
matrix has taken that pair, kept it perpendicular, and stretched one arrow by σ₁
and the other by σ₂.`]}),`
`,e.jsx(t.p,{children:`σ₁ has a second meaning worth pausing over. Every unit vector lands somewhere on
that ellipse, and the furthest the ellipse reaches from the origin is σ₁ — so
nothing anywhere in the plane gets magnified by more than σ₁, and the direction
that achieves the maximum is the one the orange arrow started along. In the same
way σ₂ is the least any direction is stretched, and everything else lands
between the two.`}),`
`,e.jsxs(t.p,{children:["Before moving on, change the entries to make ",e.jsx(t.code,{children:"M"}),` stretch a great deal in one
direction and hardly at all in another, and watch σ₁ climb while σ₂ falls. Then see whether you can get
σ₁ and σ₂ to be equal to each other. The matrices that manage it form a family
with a name, and I'll leave that one for the end.`]}),`
`,e.jsx(t.h2,{children:"An obvious plan, and why it doesn't work"}),`
`,e.jsx(t.p,{children:`A matrix stretches two perpendicular directions, then, and that is all it does.
This suggests an appealingly simple way to build any matrix we like out of parts
we already understand. First stretch — σ₁ along the horizontal, σ₂ along the
vertical — which turns the circle into an ellipse. Then rotate that ellipse to
whatever angle it needs to sit at. Two moves and we're finished.`}),`
`,e.jsx(t.p,{children:`I think that is the right guess to make, and it's worth finding out exactly how
it fails, because the repair turns out to be the whole idea.`}),`
`,e.jsxs(t.p,{children:["The panel below is that plan, assembled. ",e.jsx(t.code,{children:"S"})," does the stretching, ",e.jsx(t.code,{children:"U"}),` is a
rotation, and `,e.jsx(t.code,{children:"C = U·S"})," applies ",e.jsx(t.code,{children:"S"})," first and ",e.jsx(t.code,{children:"U"})," second — stretch, then spin."]}),`
`,e.jsx(t.p,{children:`Two things want saying before you start pulling on it, because "any stretch, any
rotation" is easy to misread.`}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"The stretch is on the two sliders."})," Drag ",e.jsx(t.code,{children:"s1"})," and ",e.jsx(t.code,{children:"s2"})," and watch ",e.jsx(t.code,{children:"S"}),` and the
ellipse follow. Notice that `,e.jsx(t.code,{children:"S"})," only ever reads ",e.jsx(t.code,{children:"[s1 0; 0 s2]"}),` — zeros off the
diagonal, every time. That isn't a restriction I've imposed to protect a point;
it is what "a stretch by fixed amounts along the horizontal and vertical" `,e.jsx(t.em,{children:"means"}),`.
Put a number in one of those empty corners and you have some other
transformation, not a stretch at all. So the row is written `,e.jsx(t.code,{children:"S = diag(s1, s2)"}),`,
which builds the matrix from the two numbers and cannot come out any other shape.
Every stretch there is sits somewhere on those two sliders.`]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:`The rotation is a matrix you may edit, but not every four numbers make a
rotation.`})," A rotation reads ",e.jsx(t.code,{children:"[c −s; s c]"}),` with c² + s² = 1, which is why the
entries here are 0.6 and 0.8. If you want a different one, `,e.jsx(t.code,{children:"[0 −1; 1 0]"}),` is a
quarter turn and `,e.jsx(t.code,{children:"[0.8 −0.6; 0.6 0.8]"})," is about 37°."]}),`
`,e.jsxs(t.p,{children:[`Now go exploring. Sweep both sliders across their range, try the other rotations,
and watch the two directions `,e.jsx(t.code,{children:"svd(C)"})," reports."]}),`
`,e.jsx(n,{state:l}),`
`,e.jsxs(t.p,{children:[`They don't move. Whatever you do, the stretched directions come back as the
horizontal and the vertical — `,e.jsx(t.code,{children:"(1, 0)"})," and ",e.jsx(t.code,{children:"(0, 1)"}),`, give or take which gets
listed first and which way the arrow points. (Push `,e.jsx(t.code,{children:"s2"})," past ",e.jsx(t.code,{children:"s1"}),` and the two
trade places, since σ₁ is by definition the larger of the pair, so the long axis
becomes the vertical one. Still the axes.)`]}),`
`,e.jsxs(t.p,{children:[`There is a way to see this without reading any numbers at all, and I think it is
the better way, because the two directions are sitting in plain view. `,e.jsx(t.strong,{children:`They are
the gridlines.`})," The horizontal and vertical gridlines ",e.jsx(t.em,{children:"are"}),` the two directions
being stretched — so watch the warped grid as you drag. It stays a grid of
`,e.jsx(t.em,{children:"rectangles"}),`. Tilted, with cells longer one way than the other, but square at
every corner. Try to shear it. Try to get the cells to lean over into
parallelograms. You can't.`]}),`
`,e.jsx(t.p,{children:`Why not is worth taking some time on, and it comes down to one sentence:
perpendicular in, perpendicular out. The grid directions arrive at right angles.
A stretch along those very directions leaves them at right angles, since it only
makes them longer and shorter. And a rotation turns the whole picture without
ever changing an angle inside it. There is no step in stretch-then-spin that
could bend a right angle, so the corners survive all the way through.`}),`
`,e.jsxs(t.p,{children:["That is also what the last line of the ",e.jsx(t.code,{children:"svd(C)"}),` row is reporting, and it is worth
unpacking rather than glossing. Warp takes whatever matrix you hand it and splits
it into a rotation, a stretch, and a rotation — the very three-step form we are
working towards. For these matrices it keeps telling you that the `,e.jsx(t.em,{children:"opening"}),`
rotation does nothing: `,e.jsx(t.code,{children:"Vᵀ spins 0°"}),`. It looks for a first rotation because there
is always one to find, and it finds that there is no work for it to do, because
the directions this matrix stretches were already lying on the axes when they
arrived. Drag the sliders and that line sits at 0° (or jumps to a quarter turn
when the two σ trade places). It never lands on an ordinary angle.`]}),`
`,e.jsx(t.p,{children:`If you would like the same fact as arithmetic: a 2×2 matrix is four independent
numbers, while stretch-then-spin offers three adjustable ones — one angle and two
stretches. We are exactly one short, and the missing one is the tilt of the
directions being stretched.`}),`
`,e.jsxs(t.p,{children:["And the smallest thing out of reach is the shear ",e.jsx(t.code,{children:"[1 1; 0 1]"}),`. Its columns are
`,e.jsx(t.code,{children:"(1, 0)"})," and ",e.jsx(t.code,{children:"(1, 1)"}),`, which are not perpendicular; and the columns of a matrix
are just where the two grid directions land. Leaning gridlines, so no pair of
slider settings and no rotation will ever produce it. Most matrices lean.`]}),`
`,e.jsx(t.h2,{children:"Rotate, stretch, rotate"}),`
`,e.jsxs(t.p,{children:[`Look again at what went wrong, because it tells us what to do. Nothing in
stretch-then-spin ever gets to `,e.jsx(t.em,{children:"choose"}),` which directions are stretched. The
stretch takes the axes, and it takes them for the dullest of reasons: the axes
are what it was handed.`]}),`
`,e.jsxs(t.p,{children:["So hand it something else. Put a rotation in ",e.jsx(t.em,{children:"front"}),` of the stretch, and give it
one job — turn the plane so that the directions we actually want stretched are
lying along the axes by the time the stretch arrives. The stretch is then free to
be the plain axis-aligned thing it has to be, and the tilt we couldn't express
before is expressed by the new rotation instead.`]}),`
`,e.jsx(t.p,{children:`Three moves, then. A rotation whose only job is to swing the two special
directions onto the coordinate axes — the move the two-step plan was missing.
Then the stretch, σ₁ along the horizontal and σ₂ along the vertical and nothing
else. Then a second rotation, carrying the finished ellipse into its proper
position.`}),`
`,e.jsxs(t.p,{children:["In symbols that is ",e.jsx(t.code,{children:"M = U·Σ·Vᵀ"}),", with ",e.jsx(t.code,{children:"Vᵀ"})," the opening rotation, ",e.jsx(t.code,{children:"Σ"}),` the stretch
and `,e.jsx(t.code,{children:"U"}),` the closing rotation. Two angles and two stretches: four adjustable
numbers for four matrix entries, which is precisely the right count. It's called
the `,e.jsx(t.em,{children:"singular value decomposition"}),"."]}),`
`,e.jsxs(t.p,{children:["The panel below has one taken apart. ",e.jsx(t.code,{children:"U"})," and ",e.jsx(t.code,{children:"Vt"})," are rotations. ",e.jsx(t.code,{children:"S"}),` is the same
kind of stretch as before, written out in full this time rather than through
`,e.jsx(t.code,{children:"diag"}),`: a 3 in the top-left corner, a 1 in the bottom-right, and zeros in the
other two places. Those two corner entries are the only numbers in the whole
business that aren't part of a rotation. And `,e.jsx(t.code,{children:"C = U·S·Vt"}),` is the three of them
composed.`]}),`
`,e.jsxs(t.p,{children:[`Warp animates a product one factor at a time, right to left, so pressing play
applies `,e.jsx(t.code,{children:"Vt"}),", then ",e.jsx(t.code,{children:"S"}),", then ",e.jsx(t.code,{children:"U"}),`. Before you press it, decide what each stage
will look like — and in particular, what does the first stage do to a circle?`]}),`
`,e.jsx(n,{state:d,height:520}),`
`,e.jsx(t.p,{children:`Look at the gridlines first, since that was the promise. They lean: the cells are
parallelograms now, not rectangles.`}),`
`,e.jsxs(t.p,{children:[`It's worth seeing exactly where the lean comes from, because it is the whole
difference between two moves and three. The stretch only ever pulls along the
coordinate axes. In the two-move version the gridlines were already lying along
those axes when the pull arrived, so it simply made them longer and shorter and
left them as square as it found them. Put a rotation in front and the gridlines
arrive `,e.jsx(t.em,{children:"off"}),` the axes instead — and a pull along x and y acts unevenly on a line
lying diagonally across them, which tips it. The right angle is the casualty, and
that lost right angle is precisely the freedom the two-move version never had.`]}),`
`,e.jsxs(t.p,{children:[`As for the animation, the first stage appears to do nothing, which is exactly
right: a rotation carries the circle onto itself, so there is nothing to see.
Something has happened
underneath, though, and you can catch it in the act. Drag the slider back to the
very start and notice that the two σ arrows sit at an angle; then drag forward to
the end of the first stage and watch them arrive on the horizontal and the
vertical. That swing is the entire content of `,e.jsx(t.code,{children:"Vᵀ"}),`. It has spent a third of the
transformation buying us the right to perform a plain, boring stretch — which is
the second stage, where the ellipse is finally born. The third stage merely turns
the result to face the right way.`]}),`
`,e.jsx(t.p,{children:`The ellipse we began with was never mysterious, then. Every matrix is a stretch
along two perpendicular directions wearing a pair of rotations as a disguise. The
four entries look like four unrelated numbers, but they are really encoding two
angles and two lengths — and a circle stretched along perpendicular axes is an
ellipse, with no room left over for it to be anything else.`}),`
`,e.jsxs(t.p,{children:["Take the disguise off yourself. Clicking the small circle to the left of ",e.jsx(t.code,{children:"U"}),`, or
of `,e.jsx(t.code,{children:"S"}),", or of ",e.jsx(t.code,{children:"Vt"}),`, makes just that one factor warp the plane, so you can look at
each in isolation; `,e.jsx(t.code,{children:"S"}),` on its own is the naked axis-aligned ellipse, before any
disguise at all. Then click back on `,e.jsx(t.code,{children:"C"}),` to reassemble it. (Isolating a factor
also brings back the basis vectors and the shaded unit square, which these panels
start with switched off. A second click on a matrix's dot strips it back to
gridlines, and a third turns it off.)`]}),`
`,e.jsxs(t.p,{children:["And look at what ",e.jsx(t.code,{children:"C"})," actually is: ",e.jsx(t.code,{children:"1.92"}),", ",e.jsx(t.code,{children:"0.44"}),", ",e.jsx(t.code,{children:"1.56"}),", ",e.jsx(t.code,{children:"1.92"}),`. Handed those
four numbers cold you would have no idea what they did. They are a rotation of
−36.9°, a stretch by 3 and by 1, and a rotation of 53.1°.`]}),`
`,e.jsx(t.h2,{children:"Where the determinant went"}),`
`,e.jsxs(t.p,{children:[`You may already know the determinant as the factor by which a matrix scales area:
hand it a region and the region comes back `,e.jsx(t.code,{children:"det(M)"}),` times larger. If that's new,
take it as a definition for the next few paragraphs, since it's all we need.`]}),`
`,e.jsxs(t.p,{children:[`We're now in a position to say where the number comes from. The unit circle has
area π. It lands on an ellipse with semi-axes σ₁ and σ₂, and an ellipse with
semi-axes `,e.jsx(t.em,{children:"a"})," and ",e.jsx(t.em,{children:"b"}),` has area π·a·b. The area has been multiplied by σ₁·σ₂, and
so `,e.jsx(t.code,{children:"det(M) = ±σ₁·σ₂"}),"."]}),`
`,e.jsxs(t.p,{children:["The determinant is not a separate fact about a matrix, then. It is the ",e.jsx(t.em,{children:"product"}),`
of the singular values — one number that multiplies the two stretches together
and, in the process, forgets everything else about them. What gets forgotten will
matter a great deal in the next section.`]}),`
`,e.jsxs(t.p,{children:[`First the ± sign, which we haven't earned. Neither a rotation nor a stretch by
positive amounts can turn the plane over, so if a matrix `,e.jsx(t.em,{children:"does"}),` turn the plane
over, where is the reversal hiding? The panel below has both `,e.jsx(t.code,{children:"svd(M)"}),` and
`,e.jsx(t.code,{children:"det(M)"}),", agreeing to begin with: σ₁ = 3, σ₂ = 1, det = 3. Change ",e.jsx(t.code,{children:"M"}),` until
`,e.jsx(t.code,{children:"det(M)"}),` comes out negative — putting a minus sign in front of both entries of
the bottom row is the quickest route — and keep an eye on the last line of the
`,e.jsx(t.code,{children:"svd"}),` row while you do it. Guess first: will the reversal appear in the stretch,
in `,e.jsx(t.code,{children:"Vᵀ"}),", or in ",e.jsx(t.code,{children:"U"}),"?"]}),`
`,e.jsx(n,{state:c}),`
`,e.jsxs(t.p,{children:["The σ values stay resolutely positive, as they must, being lengths. ",e.jsx(t.code,{children:"Vᵀ"}),` remains
an ordinary rotation. The reversal turns up in `,e.jsx(t.code,{children:"U"}),", whose line now ends ",e.jsx(t.em,{children:`and
flips`}),": the closing step doesn't merely turn the ellipse, it turns it over."]}),`
`,e.jsxs(t.p,{children:[`That is partly a choice Warp has made on your behalf, and it seems only fair to
admit it. The decomposition isn't unique — there is more than one way to divide
the work between the two rotations — and Warp always arranges for `,e.jsx(t.code,{children:"Vᵀ"}),` to be a
plain rotation, which forces any reversal into `,e.jsx(t.code,{children:"U"}),`, where you can find it in one
predictable place.`]}),`
`,e.jsx(t.p,{children:`So the determinant is telling you two things at once. How much the area changed,
which is the product of the stretches; and whether the plane was turned over,
which is the sign contributed by the closing rotation.`}),`
`,e.jsx(t.h2,{children:"How close is close to broken?"}),`
`,e.jsx(t.p,{children:"Now for somewhere the singular values can go and the determinant cannot follow."}),`
`,e.jsx(t.p,{children:`The familiar fact about invertibility is that a matrix can be undone exactly when
its determinant isn't zero, and that's true. But it's a yes-or-no answer, and
what you generally want is a dial rather than a switch. A matrix that squashes the
plane down to very nearly nothing is, strictly speaking, invertible, and
practically speaking a disaster: undoing it means dividing by that very nearly
nothing.`}),`
`,e.jsxs(t.p,{children:[`Since what we want is a dial, let's use one. The panel below is the full
three-move decomposition again, with the two stretches back on sliders, and `,e.jsx(t.code,{children:"s2"}),`
already down at 0.2 — so the ellipse is a sliver, though `,e.jsx(t.code,{children:"det(C)"}),` reads 0.6 and
`,e.jsx(t.code,{children:"inv(C)"})," still hands back a perfectly respectable inverse."]}),`
`,e.jsxs(t.p,{children:["Drag ",e.jsx(t.code,{children:"s2"}),` slowly down to zero, and watch four things at once: the ellipse
flattening, `,e.jsx(t.code,{children:"det(C)"})," falling, ",e.jsx(t.code,{children:"svd(C)"}),"'s second value shrinking, and ",e.jsx(t.code,{children:"inv(C)"}),`
holding on and then giving up. At the bottom the ellipse is a line segment, and
that segment is where the whole plane has gone — two dimensions crushed into one.
`,e.jsx(t.code,{children:"svd(C)"})," adds a line to say the rank has fallen to 1."]}),`
`,e.jsxs(t.p,{children:["The useful part is what happens ",e.jsx(t.em,{children:"on the way down"}),`, which a yes-or-no test cannot
show you at all. Nothing sudden happens anywhere along the slider. The matrix
just gets steadily worse to undo — watch the numbers inside `,e.jsx(t.code,{children:"inv(C)"}),` swell as you
go — and the determinant slides towards zero alongside it.
Then try something less obvious. Put `,e.jsx(t.code,{children:"s2"})," back around 0.1 and drag ",e.jsx(t.code,{children:"s1"}),` up to 3,
then type `,e.jsx(t.code,{children:"s1 = 30"}),` into its row to go further than the slider reaches. Before
you look at `,e.jsx(t.code,{children:"det(C)"}),", predict what it will say."]}),`
`,e.jsx(n,{state:u,height:500}),`
`,e.jsx(t.p,{children:`It says 3 — precisely the determinant of the healthy stretch-by-3-and-1 from the
decomposition panel. A determinant of 3 sounds as though nothing is wrong. But
this matrix takes the circle to a splinter three hundred times longer than it is
wide; it is very nearly singular, and the determinant has no way of saying so,
because all it ever reports is the product, and 30 × 0.1 is as respectable a 3 as
3 × 1 ever was. σ₂ says it immediately: 0.1, and shrinking.`}),`
`,e.jsxs(t.p,{children:["The ratio σ₁/σ₂ is called the ",e.jsx(t.em,{children:"condition number"}),`, and it's the quantity people
who compute with matrices for a living actually keep an eye on. It is the honest
answer to `,e.jsx(t.em,{children:"how close is this matrix to destroying information"}),`, and it is
invisible to the determinant. The determinant tells you whether a matrix can be
undone. The singular values tell you how much trouble you're in.`]}),`
`,e.jsx(t.h2,{children:"One more dimension"}),`
`,e.jsxs(t.p,{children:[`None of the argument needed the plane. In three dimensions the circle becomes the
unit `,e.jsx(t.strong,{children:"sphere"}),", and it lands on an ",e.jsx(t.strong,{children:"ellipsoid"}),` — a squashed ball with three
perpendicular axes and three singular values.`]}),`
`,e.jsxs(t.p,{children:[`Drag inside the panel to turn it around. The story holds in every particular:
`,e.jsx(t.code,{children:"Vᵀ"}),` spins the sphere, which as before you can't see happening, the stretch pulls
it out along three axes, and `,e.jsx(t.code,{children:"U"}),` turns the result. So does the arithmetic —
multiply the three σ values and you get `,e.jsx(t.code,{children:"det(M)"}),`, which is 3, the volume of the
ellipsoid over the volume of the ball. (The row rounds each σ to three decimals,
so doing that multiplication by hand yields just under 3.)`]}),`
`,e.jsxs(t.p,{children:["Then flatten it, which takes exactly one keystroke. Change the ",e.jsxs(t.strong,{children:[`middle entry of
`,e.jsx(t.code,{children:"M"}),"'s bottom row"]})," from ",e.jsx(t.code,{children:"0"})," to ",e.jsx(t.code,{children:"3"}),", so that the bottom row reads ",e.jsx(t.code,{children:"1 3 1"}),` — the
sum of the two rows above it. A row that is the sum of the others brings no new
direction with it, and space obliges by losing one: σ₃ falls to exactly 0, the
`,e.jsx(t.code,{children:"svd"}),` row reports rank 2, and the ellipsoid flattens into a disc. Three
dimensions of space, living on a sheet.`]}),`
`,e.jsxs(t.p,{children:[`If you'd like to lose another dimension, one row being redundant is no longer
enough — you need every row to carry the same single direction. Set the middle
row to `,e.jsx(t.code,{children:"1 1 0"}),", matching the top one, and the bottom row to ",e.jsx(t.code,{children:"2 2 0"}),`. Now all
three rows are multiples of `,e.jsx(t.code,{children:"1 1 0"}),`, so a single direction is all that survives:
σ₂ joins σ₃ at zero, the `,e.jsx(t.code,{children:"svd"}),` row reports rank 1, and the disc collapses to a
line.`]}),`
`,e.jsx(n,{state:g,height:540,zoom:.72}),`
`,e.jsx(t.h2,{children:"Your turn"}),`
`,e.jsxs(t.p,{children:["An empty sandbox. Add a matrix from the ",e.jsx(t.strong,{children:"+"}),` menu, then use an expression row's
gear button to drop in `,e.jsx(t.code,{children:"circle()"})," and ",e.jsx(t.code,{children:"svd( )"}),`. If Warp is new to you, the
`,e.jsx(t.strong,{children:"Tutorial"})," button gives a short tour."]}),`
`,e.jsx(t.p,{children:"Some things worth going after:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Make σ₁ and σ₂ exactly equal."}),` The ellipse becomes a circle again, which is
to say the matrix stretches every direction by the same amount. What must such
a matrix look like? There's a whole family of them, and the obvious one is not
the only member.`]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Stretch by 3 along the horizontal, then turn the result 45°."}),` This is the
easy case — the one the two-move plan could already handle, because the
direction being stretched is the horizontal to begin with and no opening
rotation is needed. Then try the harder version: stretch by 3 along a line
tilted 30° from the horizontal, and see what `,e.jsx(t.code,{children:"Vᵀ"})," has to become."]}),`
`,e.jsxs(t.li,{children:[e.jsxs(t.strong,{children:["Build the shear ",e.jsx(t.code,{children:"[1 1; 0 1]"})," out of ",e.jsx(t.code,{children:"U·S·Vt"})]}),` and read off its singular
values. They aren't pretty numbers, which is rather the point: a matrix made
entirely of ones and zeros is secretly a rotation, an irrational stretch, and
another rotation.`]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:`Find a matrix whose σ₁ is enormous and σ₂ tiny, but whose determinant is
exactly 1.`})," Area perfectly preserved; information very nearly destroyed."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Go into 3D and arrange for exactly one singular value to be zero,"}),` so that
three dimensions of space live on a flat sheet. Then ask `,e.jsx(t.code,{children:"inv(M)"}),` what it makes
of that.`]}),`
`]}),`
`,e.jsx(n,{state:w,height:560,tutorial:!0}),`
`,e.jsx("p",{className:"article-cta",children:e.jsx("a",{href:p,children:"Open the full sandbox →"})})]})}function x(s={}){const{wrapper:t}=s.components||{};return t?e.jsx(t,{...s,children:e.jsx(i,{...s})}):i(s)}a.createRoot(document.getElementById("root")).render(e.jsx(o.StrictMode,{children:e.jsx(m,{title:"Singular Values",subtitle:"Every matrix is a stretch in disguise",date:"Summer 2026",children:e.jsx(x,{})})}));
