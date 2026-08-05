import{j as e,R as r,a}from"./styles-Co1da3D_.js";import{W as s,S as o,p as h,R as d,q as l,r as c,s as u,e as p,A as x}from"./WarpEmbed-CeVBNcZS.js";function i(t){const n={blockquote:"blockquote",code:"code",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...t.components};return e.jsxs(e.Fragment,{children:[`
`,e.jsx(n.p,{children:`A 2×2 matrix is four numbers in a box, and nothing about the way it is written
suggests the four have anything to do with one another.`}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["A matrix looks like four arbitrary numbers. It is really ",e.jsx(n.strong,{children:`two perpendicular
directions going in, two amounts of stretch, and two perpendicular directions
coming out.`})]}),`
`]}),`
`,e.jsx(n.p,{children:`Here is the picture that holds the whole argument — the unit circle, and where a
matrix sends it.`}),`
`,e.jsx(s,{state:o}),`
`,e.jsxs(n.p,{children:["An ellipse. Change any entry you like and you get a ",e.jsx(n.em,{children:"different"}),` ellipse, but you
get an ellipse: never a peanut, never an egg, never a shape fatter at one end than
the other. Try for a while — the panel is yours, and the dashed outline shows
where the circle started.`]}),`
`,e.jsx(n.p,{children:`Six things out of four numbers, then, and each of the six will turn out to be
something you can point at. That refusal to be anything but an ellipse is the six
things showing through: a matrix has so little freedom in
what it can do to a circle precisely because all it can do to a circle is stretch
it by two amounts along two perpendicular directions. There is nothing else in
there to do.`}),`
`,e.jsxs(n.p,{children:["If you are meeting this in a linear algebra course it goes by the name ",e.jsx(n.em,{children:`singular
value decomposition`}),`, and it is usually introduced from the algebra end. We won't
need the algebra.`]}),`
`,e.jsx(n.h2,{children:"Four of the six are already on the screen"}),`
`,e.jsxs(n.p,{children:["Add one row, ",e.jsx(n.code,{children:"svd(M)"}),`, and Warp reports two numbers, σ₁ and σ₂, each with a
direction attached.`]}),`
`,e.jsx(n.p,{children:`Before you look: the ellipse in front of you has a long direction and a short
one, at right angles, with a definite length along each. Which of the six things
would you guess σ₁ and σ₂ are?`}),`
`,e.jsx(s,{state:h}),`
`,e.jsxs(n.p,{children:["They are the ",e.jsx(n.strong,{children:"two stretch amounts"}),`. σ₁ is how far the ellipse reaches along its
long axis and σ₂ along its short one — and because the circle we started with had
radius 1 in every direction, those two lengths `,e.jsx(n.em,{children:"are"}),` how much the matrix
stretched, in each of the two directions it stretches along.`]}),`
`,e.jsxs(n.p,{children:[`That is two of the six. The arrows hand you two more: the directions those axes
point in are the `,e.jsx(n.strong,{children:"two output directions"}),", where the stretching ends up."]}),`
`,e.jsxs(n.p,{children:[`The last two are hiding in plain sight. Drag the animation slider back to the
beginning and look at the same two arrows `,e.jsx(n.em,{children:"before"}),` the matrix touched them. They
are a perpendicular pair of unit vectors sitting on the circle. Those are the
`,e.jsx(n.strong,{children:"two input directions"}),` — the pair this matrix picks out, keeps perpendicular,
and stretches.`]}),`
`,e.jsx(n.p,{children:`So the picture was showing you all six from the start. Scrub slowly back and
forth a few times and watch the pair swing from the input directions to the
output directions, growing by σ₁ and σ₂ as it goes. That motion is the entire
content of the matrix.`}),`
`,e.jsxs(n.p,{children:["One word in there is load-bearing, and it turns up at both ends: ",e.jsx(n.em,{children:"perpendicular"}),`.
Every matrix has some perpendicular pair that it sends to another perpendicular
pair. You have just watched that happen, and you can watch it again for any
matrix you care to type, which is not a proof but is a good deal more convincing
than being told. It is also the fact that makes the next-but-one section come out
even.`]}),`
`,e.jsx(n.h2,{children:"These are not eigenvalues"}),`
`,e.jsx(n.p,{children:`If you have already met eigenvalues, now is the time to separate the two, because
they are the most commonly confused pair in the subject and they answer different
questions.`}),`
`,e.jsxs(n.p,{children:["Take the shear ",e.jsx(n.code,{children:"[1 1; 0 1]"}),", the matrix every course reaches for, and ask it both."]}),`
`,e.jsx(s,{state:d}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"eigen(M)"})," reports λ = 1, repeated, with one surviving direction, ",e.jsx(n.code,{children:"(1, 0)"}),`. Read
that literally: there is exactly one line this matrix leaves in place, and along
that line nothing changes length at all.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"svd(M)"}),` reports σ₁ = 1.618 and σ₂ = 0.618. Read that literally too: this matrix
stretches some direction by more than half again, and squashes another to under
two thirds.`]}),`
`,e.jsx(n.p,{children:`Both are true, and they are not in tension. They are answers to different
questions:`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Eigenvalues"})," answer ",e.jsx(n.em,{children:`which directions come back pointing along themselves,
and by what factor.`}),` A shear has only one such direction and doesn't stretch
it, so λ = 1.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Singular values"})," answer ",e.jsx(n.em,{children:`how much does this thing stretch, at most and at
least.`})," A shear plainly distorts, so σ₁ > 1 > σ₂."]}),`
`]}),`
`,e.jsxs(n.p,{children:[`Three more differences worth having straight. Eigenvalues can be negative, or
complex, or absent — a rotation has no real eigenvectors whatsoever, while its
singular values are simply 1 and 1. Singular values are lengths of ellipse axes,
so there are always exactly two and neither is ever negative. And an
eigen-direction comes back along its `,e.jsx(n.em,{children:"own"}),` line, involving one direction; a
singular direction goes in along one line and comes out along another, involving
two. That last difference is why our six things had to list inputs and outputs
separately.`]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"eigen"}),` row is switched off in the picture deliberately: Warp draws
eigen-directions and singular directions from the same orange and purple, so both
sets of arrows at once are unreadable. Click its dot if you want the eigen-line
drawn, and notice it lies along neither σ arrow.`]}),`
`,e.jsxs(n.p,{children:["One more thing to notice while you are here. ",e.jsx(n.code,{children:"det(M)"}),` reads 1, so this shear
preserves area exactly — and σ₁ · σ₂ = 1.618 × 0.618 = 1 to match. Area is the
product of the two stretches. A matrix can leave every area in the plane
untouched and still distort space thoroughly.`]}),`
`,e.jsx(n.h2,{children:"Four numbers in, four numbers out"}),`
`,e.jsxs(n.p,{children:["Now the count, which is where the word ",e.jsx(n.em,{children:"secretly"})," earns its keep."]}),`
`,e.jsx(n.p,{children:`We have claimed six things. A matrix has only four numbers. So the six had better
not be independent — and they aren't, for a reason that is easy to walk past.`}),`
`,e.jsxs(n.p,{children:[`A single direction in the plane costs one number: an angle. A perpendicular
`,e.jsx(n.em,{children:"pair"}),` of directions also costs one number, because once you have fixed the
first, the second has nowhere left to go. Perpendicularity is what makes the pair
cheap. So the bill reads:`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["two perpendicular input directions — ",e.jsx(n.strong,{children:"one"})," number"]}),`
`,e.jsxs(n.li,{children:["two stretch amounts — ",e.jsx(n.strong,{children:"two"})," numbers"]}),`
`,e.jsxs(n.li,{children:["two perpendicular output directions — ",e.jsx(n.strong,{children:"one"})," number"]}),`
`]}),`
`,e.jsx(n.p,{children:"Four. Exactly the four you were handed in the first place."}),`
`,e.jsxs(n.p,{children:["And that count ",e.jsx(n.em,{children:"is"}),` the decomposition. Spin the plane so the input pair lies along
the axes; stretch along the axes by σ₁ and σ₂; spin the result so the axes land
where the output pair belongs. In symbols, `,e.jsx(n.code,{children:"M = U·Σ·Vᵀ"}),", with ",e.jsx(n.code,{children:"Vᵀ"}),` the first spin,
`,e.jsx(n.code,{children:"Σ"})," the stretch and ",e.jsx(n.code,{children:"U"})," the second."]}),`
`,e.jsxs(n.p,{children:["The panel below has one taken apart: ",e.jsx(n.code,{children:"U"})," and ",e.jsx(n.code,{children:"Vt"})," are rotations, ",e.jsx(n.code,{children:"S"}),` is the
stretch with 3 and 1 in its corners and zeros elsewhere, and `,e.jsx(n.code,{children:"C = U·S·Vt"}),` is the
three composed. Warp animates a product one factor at a time, right to left, so
play applies `,e.jsx(n.code,{children:"Vt"}),", then ",e.jsx(n.code,{children:"S"}),", then ",e.jsx(n.code,{children:"U"}),`. Predict the first stage before you press
it.`]}),`
`,e.jsx(s,{state:l,height:520}),`
`,e.jsx(n.p,{children:`Stage one does nothing you can see, which is exactly right — a rotation carries
the circle onto itself. It is spending its one number lining the input pair up
with the axes, and you can catch it doing so: scrub to the very start, note that
the two σ arrows sit at an angle, then scrub to the end of stage one and watch
them arrive on the horizontal and the vertical. Stage two is the only step that
changes the shape at all, and it is the simplest stretch there is: one number
along x, one along y. Stage three spends its one number turning the finished
ellipse to face the right way.`}),`
`,e.jsx(n.p,{children:`Count what you just watched. One angle, two stretches, one angle. Nothing left
over and nothing missing.`}),`
`,e.jsxs(n.p,{children:[`There is one honest footnote. Those four numbers pin down the ellipse, but not
quite whether space was turned over on the way: the second spin might also be a
reflection. That is one extra yes-or-no rather than a fifth number, and it is
exactly the sign of the determinant. Warp always writes the first spin as a plain
rotation, so when a flip happens it appears in the second, and the `,e.jsx(n.code,{children:"svd"}),` row says
so in as many words.`]}),`
`,e.jsx(n.p,{children:`So four arbitrary-looking numbers were never arbitrary. They were an angle, two
lengths, and another angle, written in a coordinate system that hides all three.`}),`
`,e.jsx(n.h2,{children:"What it buys you"}),`
`,e.jsx(n.p,{children:`Since the determinant multiplies the two stretches together — det = ±σ₁·σ₂ — it
cannot tell them apart. Sometimes telling them apart is the whole job.`}),`
`,e.jsxs(n.p,{children:[`The panel below is the same three-step form with the two stretches on sliders.
Drag `,e.jsx(n.code,{children:"s2"})," slowly down towards zero."]}),`
`,e.jsx(s,{state:c,height:500}),`
`,e.jsxs(n.p,{children:[`Nothing sudden happens anywhere along the way. The matrix simply gets harder and
harder to undo — watch the numbers inside `,e.jsx(n.code,{children:"inv(C)"}),` swell as you go — and at the
bottom the ellipse is a line segment, the whole plane folded onto one dimension,
`,e.jsx(n.code,{children:"det(C)"})," at 0 and ",e.jsx(n.code,{children:"inv(C)"})," giving up."]}),`
`,e.jsxs(n.p,{children:["Now the sharper version. Put ",e.jsx(n.code,{children:"s2"})," back near 0.1, then type ",e.jsx(n.code,{children:"s1 = 30"}),` into its row
to go past where the slider reaches, and look at `,e.jsx(n.code,{children:"det(C)"}),`. It reads 3 — the same
determinant as a perfectly healthy stretch by 3 and 1, because 30 × 0.1 is as
respectable a 3 as 3 × 1 ever was. The determinant cannot see the difference. σ₂
reports it immediately, and the ratio σ₁/σ₂, here 300, is called the `,e.jsx(n.em,{children:`condition
number`}),`: it is the quantity people who compute with matrices for a living
actually keep an eye on.`]}),`
`,e.jsxs(n.p,{children:["That is the practical reason for six things rather than one. ",e.jsx(n.em,{children:`Is this matrix
invertible`})," is a yes-or-no question and one number answers it. ",e.jsx(n.em,{children:`How badly is this
matrix going to behave`})," needs the two stretches kept apart."]}),`
`,e.jsx(n.h2,{children:"Now it's yours"}),`
`,e.jsxs(n.p,{children:["A blank copy of Warp. Add a matrix from the ",e.jsx(n.strong,{children:"+"}),` menu, then use an expression
row's gear button to drop in `,e.jsx(n.code,{children:"circle()"})," and ",e.jsx(n.code,{children:"svd( )"}),`. If Warp is new to you, the
`,e.jsx(n.strong,{children:"Tutorial"})," button gives a short tour."]}),`
`,e.jsx(n.p,{children:"Some things worth going after:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Read a matrix you've never seen."}),` Type any four numbers, then read all six
things off the `,e.jsx(n.code,{children:"svd"}),` row. Check yourself: does σ₁ · σ₂ come out equal to
`,e.jsx(n.code,{children:"det(M)"}),", up to sign?"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Find matrices whose input pair and output pair are the same two directions."}),`
Try `,e.jsx(n.code,{children:"[2 1; 1 3]"}),", then ",e.jsx(n.code,{children:"[1 2; 2 1]"}),`, then invent your own. What do the ones
that work have in common? (This family has a name, and it is the reason
symmetric matrices are so much easier to handle than the rest.)`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Make σ₁ and σ₂ equal."}),` The ellipse becomes a circle again, so the matrix
stretches every direction by exactly the same amount. `,e.jsx(n.code,{children:"[2 0; 0 2]"}),` is the
obvious one — now find one whose entries aren't all 0 and 2.`]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:["Ask ",e.jsx(n.code,{children:"eigen"})," and ",e.jsx(n.code,{children:"svd"})," about a rotation."]}),` One of them has nothing real to
report and the other answers 1 and 1. Make sure you can say why each is right.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Take it to 3D."})," Switch modes, type a 3×3 matrix, and graph ",e.jsx(n.code,{children:"sphere()"}),` with
`,e.jsx(n.code,{children:"svd(M)"}),`. The circle becomes a sphere, the ellipse an ellipsoid, and six things
become nine — three perpendicular directions in, three stretches, three
perpendicular directions out.`]}),`
`]}),`
`,e.jsx(s,{state:u,height:560,tutorial:!0}),`
`,e.jsx("p",{className:"article-cta",children:e.jsx("a",{href:p,children:"Open the full sandbox →"})})]})}function g(t={}){const{wrapper:n}=t.components||{};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}r.createRoot(document.getElementById("root")).render(e.jsx(a.StrictMode,{children:e.jsx(x,{title:"Reading a Matrix",subtitle:"What a 2×2 matrix is really made of",date:"Summer 2026",children:e.jsx(g,{})})}));
