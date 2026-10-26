(function () {
  'use strict';
  var KEY = 'nonSportsPhotoCourse.v1';
  var TITLE = 'In the Spotlight: Non-Sports Photo';

  /* ---------- helpers for lesson markup ---------- */
  function tips(arr) { return '<ul class="tips">' + arr.map(function (t) { return '<li>' + t + '</li>'; }).join('') + '</ul>'; }
  function scale(label, stops, hot, left, mid, right) {
    return '<div class="scale"><div class="label">' + label + '</div><div class="stops">' +
      stops.map(function (s, i) { return '<span' + (hot.indexOf(i) > -1 ? ' class="hot"' : '') + '>' + s + '</span>'; }).join('') +
      '</div><div class="ends"><span>' + left + '</span><span>' + mid + '</span><span>' + right + '</span></div></div>';
  }

  /* ---------- course content (from the Non-Sports Photographer Guide + Non-Sports Quick Cards) ---------- */
  var PAGES = [
    { type: 'intro' },

    { type: 'lesson', mod: 'Before You Go', title: 'Plan · Shoot · Upload', html:
      '<p class="lead">Classrooms, hallways, stages, clubs, ceremonies. Indoor light is darker than it looks. Set your camera before you shoot.</p>' +
      '<div class="grid2"><div><h3>Before</h3>' + tips(['<b>Talk to</b> the teacher, director or sponsor. Ask about access.', '<b>Scout</b> the room and the light.', '<b>Check out gear</b> 5th period.', '<b>Charge, format,</b> spare battery.', 'Camera on <b>Large JPEG (L)</b>, lowest compression.']) + '</div>' +
      '<div><h3>During</h3>' + tips(['<b>Go early. Stay late.</b> Watch and wait.', 'Try different angles: <b>high, low, close, wide.</b>', 'Get <b>first and last names.</b> Check spelling.']) +
      '<h3>After</h3>' + tips(['<b>Upload right away.</b> Make a backup.', '<b>Missed the shot?</b> Reschedule soon.']) + '</div></div>' },

    { type: 'multi', id: 'pack', mod: 'Before You Go', title: 'Gear check',
      scenario: 'Tomorrow after school you\'re shooting the robotics club. You stop by during 5th period to get ready.',
      q: 'Which steps belong on your before list? Select all that apply.',
      opts: [
        { t: 'Check out your gear', ok: true }, { t: 'Charge the battery and grab a spare', ok: true },
        { t: 'Switch to the smallest JPEG so more photos fit', ok: false }, { t: 'Format the card', ok: true },
        { t: 'Set the camera to Large JPEG (L)', ok: true }, { t: 'Skip scouting; you can figure out the light when you get there', ok: false },
        { t: 'Talk to the sponsor about access', ok: true }
      ],
      good: 'Gear out 5th period, battery charged, card formatted, spare battery, Large JPEG, and talk to the sponsor. Scout the room and the light too.',
      bad: 'Check the Before list. Hint: the guide wants Large JPEG (L), and you scout the room and the light ahead of time.' },

    { type: 'mc', id: 'lab', mod: 'Before You Go', title: 'Lab day',
      scenario: 'Your editor assigns a chemistry lab. The class starts with a 20-minute lecture, then students run the experiment.',
      q: 'What\'s the best plan?',
      opts: [
        { t: 'Walk in at the bell and shoot the lecture from the back.', fb: 'From the back you get backs of heads. And the lecture isn\'t the hands-on part.' },
        { t: 'Ask the teacher first. Come for the hands-on part and shoot from the front.', ok: true, fb: 'Yes. Ask the teacher first, come for the hands-on part, and shoot from the front so you get faces.' },
        { t: 'Ask a student in the class to let you in.', fb: 'Access comes from the teacher, director or sponsor.' },
        { t: 'Ask students to pretend to do the experiment early so you can leave.', fb: 'Don\'t pose or stage moments. Photojournalism is real.' }
      ] },

    { type: 'lesson', mod: 'Exposure Trio', title: 'The exposure trio', html:
      scale('Aperture (f-stop) · how wide the lens opens', ['f/2.8', 'f/4', 'f/5.6', 'f/8', 'f/11', 'f/16', 'f/22'], [0, 1], '← Small number: more light, blurry background', '', 'Big number: less light, everything sharp →') +
      scale('Shutter speed · how long the camera looks', ['1/15', '1/30', '1/60', '1/125', '1/250', '1/500', '1/1000'], [4, 5], '← Slower: blur · tripod below 1/60', '', 'Faster: freezes people who move →') +
      scale('ISO · how sensitive the camera is to light', ['100', '200', '400', '800', '1600', '3200', '6400'], [], '← Lower: bright light, clean photo', '', 'Higher: dark rooms, more grain ("noise") →') +
      scale('The meter · the line of marks in your viewfinder', ['−3', '−2', '−1', '0', '+1', '+2', '+3'], [3], '← Too dark (underexposed)', 'Aim for 0', 'Too bright (overexposed) →') +
      '<h3>Pick your mode (our Canons)</h3><div class="table-wrap"><table><thead><tr><th>Level</th><th>Mode</th><th>What it does</th></tr></thead><tbody>' +
      '<tr><td><b>Basic</b></td><td>P</td><td>Program or a scene icon. The camera sets everything. Good for your first events.</td></tr>' +
      '<tr><td rowspan="2"><b>Intermediate</b></td><td>Tv</td><td>Shutter priority: you set the shutter. Use it when people move.</td></tr>' +
      '<tr><td>Av</td><td>Aperture priority: you set the f-stop. Use it to control the background.</td></tr>' +
      '<tr><td><b>Advanced</b></td><td>M</td><td>Manual. You set shutter, aperture and ISO. Best for stages and dark rooms.</td></tr></tbody></table></div>' },

    { type: 'mc', id: 'modeTv', mod: 'Exposure Trio', title: 'Passing period',
      scenario: 'You\'re shooting students walking through the commons between classes. You want them sharp, not blurry.',
      q: 'Which mode lets you control what matters most here?',
      opts: [
        { t: 'Av', fb: 'Av controls the background. The problem here is motion.' },
        { t: 'Tv', ok: true, fb: 'Right. Tv (shutter priority): you set the shutter. Use it when people move. The hallway card says 1/250+.' },
        { t: 'P', fb: 'P sets everything for you, so you can\'t lock in a fast shutter.' },
        { t: 'Any mode; walking is slow.', fb: 'People walking still blur at slow speeds. Use 1/250.' }
      ] },

    { type: 'mc', id: 'modeAv', mod: 'Exposure Trio', title: 'Busy background',
      scenario: 'Interview portrait of the student council president. Behind her is a bulletin board covered in flyers.',
      q: 'Which mode and setting help most?',
      opts: [
        { t: 'Tv at 1/1000 to freeze her.', fb: 'She\'s sitting still. Shutter isn\'t the problem; the background is.' },
        { t: 'Av at f/16 so everything is sharp.', fb: 'f/16 makes the flyers sharp too. Big number = everything sharp.' },
        { t: 'Av at a low f-number, like f/2.8, to blur the background.', ok: true, fb: 'Yes. Av lets you control the background. Small number = blurry background. Portraits: f/2.8–f/5.6.' },
        { t: 'M at ISO 6400.', fb: 'ISO controls light sensitivity, not the background. And 6400 adds grain.' }
      ] },

    { type: 'mc', id: 'meter', mod: 'Exposure Trio', title: 'Read the meter',
      scenario: 'Outside in the courtyard, you look through the viewfinder. The meter sits at +2.',
      q: 'What does that mean?',
      opts: [
        { t: 'Too bright (overexposed). Adjust until the meter is at 0.', ok: true, fb: 'Right. Plus side = too bright. Aim for 0.' },
        { t: 'Too dark (underexposed).', fb: 'Flip it: the minus side means too dark.' },
        { t: 'Perfect; plus is better.', fb: 'The target is 0.' },
        { t: 'The focus is off.', fb: 'The meter reads exposure (how bright), not focus.' }
      ] },

    { type: 'lesson', mod: 'Exposure Trio', title: 'Set manual exposure', html:
      '<p class="lead">In M, you set everything. Follow the same six steps every time.</p>' +
      '<ol class="steps six">' +
      [['Point', 'At your subject. The meter only reads the light it sees.'], ['Set ISO', 'For the light your subject is in.'], ['Pick your priority', 'f-stop for the background, or shutter for motion.'],
        ['Other dial', 'Turn it until the meter is at 0.'], ['Test', 'Take a test photo. Zoom in on the back screen. Is the face sharp?'], ['Fix + repeat', 'Until it looks right. The light changes, so check again.']]
        .map(function (s, i) { return '<li><span class="num">' + (i + 1) + '</span><b>' + s[0] + '</b>' + s[1] + '</li>'; }).join('') + '</ol>' },

    { type: 'order', id: 'manual', mod: 'Exposure Trio', title: 'Talent show, manual mode',
      scenario: 'Talent show dress rehearsal. You\'re in M and a new staffer is watching you set up.',
      q: 'Put the six manual exposure steps in order. Use the arrow buttons to move each step.',
      items: ['Point at your subject', 'Set the ISO for the light your subject is in', 'Pick your priority: f-stop or shutter', 'Turn the other dial until the meter is at 0', 'Take a test photo and zoom in on the face', 'Fix and repeat; check again as the light changes'],
      start: [3, 0, 5, 1, 4, 2],
      good: 'Point → ISO → priority → other dial to 0 → test → fix and repeat.',
      bad: 'Start with where the meter reads its light, then set the setting that matches the light, then your priority.' },

    { type: 'lesson', mod: 'Settings by Location', title: 'Starting settings', html:
      '<p class="lead">Start here. Then check your meter and adjust.</p>' +
      '<div class="table-wrap"><table><thead><tr><th>Location</th><th>Mode</th><th>Shutter</th><th>Aperture</th><th>ISO</th></tr></thead><tbody>' +
      [['Classrooms + labs', 'Av or M', '1/60+', 'f/2.8–f/4', '1600–3200'], ['Hallways + commons', 'Tv', '1/250+', 'f/2.8–f/4', '1600–3200'],
        ['Stage shows', 'M or Tv', '1/250+', 'f/2.8–f/4', '1600–6400'], ['Ceremonies + assemblies', 'M or Tv', '1/125+', 'f/2.8–f/4', '1600–6400'],
        ['Dances + dim events', 'M', '1/125+', 'f/2.8', '1600–6400'], ['Club meetings', 'Av', '1/60+', 'f/2.8–f/4', '1600–3200'],
        ['Group photos', 'Av or M', '1/60+', 'f/8–f/11', '100–400 out, up to 1600 in'], ['Portraits', 'Av', '1/60+', 'f/2.8–f/5.6', '100–400'],
        ['Outdoors, non-sports', 'Av or Tv', '1/250+', 'f/2.8 or f/11+', '100–400']]
        .map(function (r) { return '<tr><td><b>' + r[0] + '</b></td><td>' + r.slice(1).join('</td><td>') + '</td></tr>'; }).join('') +
      '</tbody></table></div><p class="hint">"+" means that speed or faster. People walking? Use 1/250. Fast dancing or jumping? Use 1/500. Keep raising the ISO until you reach your shutter speed.</p>' +
      '<h3>Pick a lens</h3><div class="grid2"><div class="panel"><b>Wide (18–55mm):</b> small classrooms, hallways, groups</div><div class="panel blue"><b>Telephoto (70–200mm f/2.8):</b> stage shows and ceremonies from far back</div>' +
      '<div class="panel blue"><b>Fast prime (50mm f/1.8):</b> dark rooms — lets in the most light</div><div class="panel"><b>Medium telephoto (85mm or 80–135mm):</b> portraits. No wide angle up close — it stretches faces.</div></div>' },

    { type: 'settings', id: 'stage', mod: 'Settings by Location', title: 'Dial it in: spring musical',
      scenario: 'Dress rehearsal for the spring musical. The director said you can shoot from the aisles. You\'re far back from the stage.',
      q: 'Set up your camera.',
      fields: [
        { label: 'Mode', opts: ['P', 'Av', 'M'], ok: ['M'], hint: 'Stage shows: M or Tv. M is best for stages and dark rooms.' },
        { label: 'Shutter speed', opts: ['1/30', '1/60', '1/250', '1/500'], ok: ['1/250', '1/500'], hint: 'Stage shows: 1/250 or faster.' },
        { label: 'ISO', opts: ['100–400', '1600–6400'], ok: ['1600–6400'], hint: 'Indoor light is darker than it looks. Stage: 1600–6400.' },
        { label: 'Lens', opts: ['Wide 18–55mm', '70–200mm f/2.8', '85mm'], ok: ['70–200mm f/2.8'], hint: 'Far back from the stage? Telephoto.' }
      ],
      good: 'M, 1/250+, ISO 1600–6400, 70–200mm f/2.8 at f/2.8–f/4. Now spot meter on the face and wait for the peak moment.' },

    { type: 'settings', id: 'group', mod: 'Settings by Location', title: 'Dial it in: club group photo',
      scenario: 'The art club wants a group photo indoors: three rows, 24 people.',
      q: 'Set up your camera.',
      fields: [
        { label: 'Aperture', opts: ['f/2.8', 'f/4', 'f/8–f/11'], ok: ['f/8–f/11'], hint: 'Use f/8–f/11 so every row is sharp.' },
        { label: 'Lens', opts: ['70–200mm f/2.8', 'Wide 17–35mm or 18–55mm', '85mm'], ok: ['Wide 17–35mm or 18–55mm'], hint: 'Groups = wide lens.' },
        { label: 'ISO (indoors)', opts: ['100', 'Up to 1600', '6400'], ok: ['Up to 1600'], hint: 'Group photos: 100–400 outside, up to 1600 inside.' },
        { label: 'Focus on', opts: ['A face in the front row', 'A face in the middle row', 'The back wall'], ok: ['A face in the middle row'], hint: 'Focus on a face in the middle row.' }
      ],
      good: 'f/8–f/11, a wide lens, ISO up to 1600 inside, and focus on a face in the middle row. Shoot 3–5 frames for blinks.' },

    { type: 'mc', id: 'dance', mod: 'Settings by Location', title: 'Homecoming dance',
      scenario: 'Homecoming dance, very dim. You\'re in M at f/2.8, and your shutter is stuck at 1/30 to get the meter to 0.',
      q: 'What does the card say to do?',
      opts: [
        { t: 'Keep 1/30 and hold very still.', fb: 'People move. Dances need at least 1/125, and 1/500 for fast dancing.' },
        { t: 'Switch to f/8.', fb: 'That\'s less light. Use your widest aperture.' },
        { t: 'Raise the ISO until you hit 1/125 (1/500 for fast dancing).', ok: true, fb: 'Yes. Widest aperture, then raise ISO until you hit 1/125. Fast dancing? 1/500.' },
        { t: 'Pop up the built-in flash.', fb: 'No flash. Raise the ISO instead.' }
      ] },

    { type: 'mc', id: 'lens', mod: 'Settings by Location', title: 'Portrait lens',
      scenario: 'Headshot for a feature story. You\'re standing about three feet away.',
      q: 'Which lens choice fits the guide?',
      opts: [
        { t: 'Wide 18–55mm at 18mm, to fit more in.', fb: 'No wide angle up close. It stretches faces.' },
        { t: '85mm or 80–135mm medium telephoto.', ok: true, fb: 'Right. Medium telephoto for portraits, f/2.8–f/5.6 to blur the background. Focus on the eyes.' },
        { t: '17–35mm, because it\'s great for groups.', fb: 'Wide is for groups and small rooms, not close portraits.' },
        { t: 'Whatever is on the camera.', fb: 'Lens choice matters: wide up close stretches faces.' }
      ] },

    { type: 'lesson', mod: 'Light + Focus', title: 'Focus, metering + color', html:
      '<div class="grid2"><div class="panel"><b>Focus</b><br><b>One Shot:</b> for people who sit or stand still.<br><b>AI Servo:</b> for people who move.<br>Focus on the wrong thing? Put the face in the center. Press the shutter halfway. Hold. Move the camera. Shoot.<br>Too dark to focus? Find a brighter spot or switch to MF (manual).</div>' +
      '<div class="panel blue"><b>Metering</b><br><b>Evaluative:</b> reads the whole frame. Use it for even light, like classrooms.<br><b>Spot:</b> reads a small circle in the center. Use it for a spotlight on a dark stage. Point it at the face.</div>' +
      '<div class="panel blue"><b>White balance</b><br>AWB (auto) first. Yellow or green faces under classroom lights? Try Fluorescent or Tungsten. Harsh stage spotlights? Try Daylight. Outside: Shade or Cloudy if the photo looks blue.</div>' +
      '<div class="panel"><b>File + card</b><br>Large JPEG (L), lowest compression. Empty, formatted card. Spare battery.</div></div>' },

    { type: 'mc', id: 'spot', mod: 'Light + Focus', title: 'Spotlight solo',
      scenario: 'A singer stands in one spotlight on a dark stage. On Evaluative, her face comes out bright white.',
      q: 'What should you change?',
      opts: [
        { t: 'Switch to Spot metering and point it at her face.', ok: true, fb: 'Yes. The dark stage tricks the meter. Spot meter on the face.' },
        { t: 'Raise the ISO.', fb: 'Her face is already too bright. Higher ISO makes it brighter.' },
        { t: 'Add flash to even it out.', fb: 'No flash. It distracts performers and the audience.' },
        { t: 'Switch to AI Servo.', fb: 'That\'s a focus mode. The problem is metering.' }
      ] },

    { type: 'mc', id: 'servo', mod: 'Light + Focus', title: 'Walking the aisle',
      scenario: 'Graduating seniors walk down the aisle at an induction ceremony. Your focus keeps landing behind them.',
      q: 'Which focus mode fits?',
      opts: [
        { t: 'One Shot', fb: 'One Shot is for people who sit or stand still.' },
        { t: 'AI Servo', ok: true, fb: 'Right. AI Servo is for people who move.' },
        { t: 'Spot', fb: 'Spot is a metering mode, not a focus mode.' },
        { t: 'AWB', fb: 'AWB is white balance.' }
      ] },

    { type: 'lesson', mod: 'Fix It', title: 'Fix it (pick one)', html:
      '<div class="table-wrap"><table><thead><tr><th>Problem</th><th>Why</th><th>Fix it (pick one)</th></tr></thead><tbody>' +
      [['Too dark', 'Not enough light', 'Lower f-number · slower shutter (not below 1/60) · higher ISO'], ['Too bright', 'Too much light', 'Higher f-number · faster shutter · lower ISO'],
        ['Whole photo blurry', 'Camera shake or missed focus', 'Hold steady. Shutter at least 1 ÷ lens length (200mm → 1/200). Check the focus point.'],
        ['Moving person blurry', 'Shutter too slow', '1/250 for walking · 1/500 for fast action · 1/60 is OK only for still people'],
        ['Grainy / noisy', 'ISO too high', 'Lower f-number or slower shutter, then lower the ISO. Use a fast lens.'], ['Yellow or green faces', 'Indoor lights', 'White balance: Fluorescent or Tungsten'],
        ['Background sharp, face soft', 'Autofocus picked the wrong spot', 'Face in the center · half-press · hold · move the camera · shoot']]
        .map(function (r) { return '<tr><td><b>' + r[0] + '</b></td><td>' + r[1] + '</td><td>' + r[2] + '</td></tr>'; }).join('') + '</tbody></table></div>' },

    { type: 'match', id: 'fix', mod: 'Fix It', title: 'Diagnose the photos',
      scenario: 'Your Field Editor flags five photos from this week\'s shoots.',
      q: 'Match each problem to a fix from the Fix It card.',
      choices: ['Higher f-number · faster shutter · lower ISO', 'Faster shutter: 1/250 walking, 1/500 action', 'WB: Fluorescent or Tungsten', 'Face in center · half-press · hold · move · shoot', 'More light from f-stop or shutter, then lower ISO'],
      rows: [
        { p: 'Courtyard photo, way too bright.', a: 'Higher f-number · faster shutter · lower ISO' },
        { p: 'Students walking to class are blurry; the lockers are sharp.', a: 'Faster shutter: 1/250 walking, 1/500 action' },
        { p: 'Faces look green under classroom lights.', a: 'WB: Fluorescent or Tungsten' },
        { p: 'The poster behind the speaker is sharp; his face is soft.', a: 'Face in center · half-press · hold · move · shoot' },
        { p: 'Speckled, grainy library photo.', a: 'More light from f-stop or shutter, then lower ISO' }
      ],
      good: 'That\'s the Fix It card. Pick one fix, test, repeat.',
      bad: 'Name the problem first (too bright, motion blur, color, focus, grain), then find its fix.' },

    { type: 'mc', id: 'shake', mod: 'Fix It', title: 'Shaky telephoto',
      scenario: 'From the back of an assembly, you\'re zoomed to 200mm at 1/60. The whole photo is blurry, even the podium.',
      q: 'What\'s the fix?',
      opts: [
        { t: 'Lower the ISO.', fb: 'ISO affects grain and brightness, not shake.' },
        { t: 'Raise the shutter to at least 1/200 and hold steady.', ok: true, fb: 'Yes. Shutter at least 1 ÷ lens length: 200mm → 1/200. Raise ISO if you need the light.' },
        { t: 'Switch to f/16.', fb: 'Less light, and it doesn\'t fix camera shake.' },
        { t: 'Change white balance.', fb: 'WB fixes color, not blur.' }
      ] },

    { type: 'lesson', mod: 'Tips by Location', title: 'Where to stand · What to look for', html:
      '<div class="grid2">' +
      [['Classrooms + labs', ['Ask the teacher first. Come for the hands-on part, not the lecture.', 'Shoot from the front. Faces, not backs of heads.', 'Get low to desk level. Shoot hands, tools, details.']],
        ['Hallways + commons', ['Hallways and lockers make strong leading lines.', 'Look for interaction: laughing, helping, reacting.', 'Stand near windows and doors for light. Get names right away.']],
        ['Stage shows', ['Dress rehearsal is best. Ask the director about the stage or aisles.', 'No flash. Spot meter on the face.', 'Wait for the peak moment: the high note, the punchline, the lift.', 'Some licensed shows limit photos to rehearsals. Ask.']],
        ['Ceremonies + assemblies', ['Get the program. Know when big moments happen.', 'Pick your spot early. Move only between parts, quietly.', 'Shoot the moment and the reaction.', 'Wear dark clothes. No flash.']],
        ['Dances + dim events', ['Widest aperture. Raise ISO until you hit 1/125.', 'Put people in spotlights and colored light.']],
        ['Club meetings', ['Candid, not just posed groups. Show what the club does.', 'Ask the sponsor: "When is the best part?" Come then.', 'Shoot the leader and the listeners\' reactions.']],
        ['Group photos', ['Orderly rows. If you can\'t see a face, it can\'t see you.', 'More than 35–40 people? Split into smaller groups.', 'Give directions out loud. You are in charge. Shoot 3–5 frames for blinks.']],
        ['Portraits + outdoors', ['Window light or open shade. Avoid overhead lights.', 'Focus on the eyes. Clean background.', 'Outdoors: open shade or golden hour.']]]
        .map(function (c) { return '<div class="panel"><b>' + c[0] + '</b>' + tips(c[1]) + '</div>'; }).join('') + '</div>' },

    { type: 'mc', id: 'ceremony', mod: 'Tips by Location', title: 'Awards night',
      scenario: 'Academic awards night in the auditorium. Families fill the seats.',
      q: 'Which plan follows the ceremonies card?',
      opts: [
        { t: 'Walk up front for each award, using flash so faces are bright.', fb: 'Move only between parts, quietly. No flash.' },
        { t: 'Get the program, pick your spot early, shoot the moment and the reaction.', ok: true, fb: 'Yes. Know when big moments happen, move only between parts, and wear dark clothes. No flash.' },
        { t: 'Shoot only the handshakes; reactions are extra.', fb: 'Shoot the moment (handshake) and the reaction (family, friends).' },
        { t: 'Wear your brightest school shirt so people know you\'re staff.', fb: 'Wear dark clothes. Don\'t distract.' }
      ] },

    { type: 'mc', id: 'club', mod: 'Tips by Location', title: 'Club coverage',
      scenario: 'You\'re covering the debate club. Last time, all you got was a posed group shot.',
      q: 'What\'s the better approach?',
      opts: [
        { t: 'Ask the sponsor, "When is the best part?" Come then for candid action.', ok: true, fb: 'Right. Candid, not just posed groups. Shoot the leader and the listeners\' reactions. Get one group photo too.' },
        { t: 'Shoot two posed group photos this time.', fb: 'Show what the club does: building, debating, practicing, voting.' },
        { t: 'Ask members to act out a debate for you.', fb: 'Don\'t pose or stage moments. Come when it really happens.' },
        { t: 'Shoot from the back so you don\'t interrupt.', fb: 'Faces, not backs of heads.' }
      ] },

    { type: 'mc', id: 'rows', mod: 'Tips by Location', title: 'Fifty members',
      scenario: 'Fifty members of the service club show up for one group photo.',
      q: 'What does the group photo card say?',
      opts: [
        { t: 'Squeeze everyone in and use a wider lens.', fb: 'Faces get tiny. More than 35–40 people? Split them up.' },
        { t: 'Split into smaller groups. Orderly rows, every face shows.', ok: true, fb: 'Yes. More than 35–40 people? Split into smaller groups. Give directions out loud.' },
        { t: 'Have the sponsor arrange them while you wait.', fb: 'You are in charge. Give directions out loud.' },
        { t: 'Shoot one frame and move on.', fb: 'Shoot 3–5 frames for blinks.' }
      ] },

    { type: 'lesson', mod: 'Tell the Story', title: 'The shot list', html:
      '<p class="lead">On every assignment, get all 8. Shoot big groups, small groups, pairs and one person.</p>' +
      '<div class="table-wrap"><table><thead><tr><th>Shot</th><th>What it is</th></tr></thead><tbody>' +
      [['1 Overall', 'Wide shot that shows the whole scene. Think high up, looking down.'], ['2 Medium', 'Closer. One activity or one group.'], ['3 Close-up / detail', 'Tight shot of one thing: hands, a tool, a costume, a trophy.'],
        ['4 Interaction', 'People talking, hugging, laughing or celebrating together.'], ['5 Portrait', 'One person. Tight crop, or show their space. Try a vertical.'], ['6 Signature', 'The one photo that tells the whole story. The big moment.'],
        ['7 Sequence', 'Beginning, middle and end. Or before and after.'], ['8 Clincher', 'The closing photo. The last bow, the empty room, the walk out.']]
        .map(function (r) { return '<tr><td><b>' + r[0] + '</b></td><td>' + r[1] + '</td></tr>'; }).join('') + '</tbody></table></div>' },

    { type: 'match', id: 'eight', mod: 'Tell the Story', title: 'Build the story: the fall play',
      scenario: 'You covered the fall play from rehearsal to closing night. Your editor needs one of each shot.',
      q: 'Label each photo with its shot from the shot list.',
      choices: ['Overall', 'Medium', 'Close-up / detail', 'Interaction', 'Portrait', 'Signature', 'Sequence', 'Clincher'],
      rows: [
        { p: 'From the balcony: the whole stage, set and audience.', a: 'Overall' },
        { p: 'The three leads rehearsing one scene.', a: 'Medium' },
        { p: 'Tight on stage makeup brushes and a costume button.', a: 'Close-up / detail' },
        { p: 'Two cast members laughing together backstage.', a: 'Interaction' },
        { p: 'The stage manager at the light board, vertical, showing her space.', a: 'Portrait' },
        { p: 'The lead at the high note, arms wide, spotlight on her.', a: 'Signature' },
        { p: 'Four frames: actor in the makeup chair, before and after.', a: 'Sequence' },
        { p: 'The cast\'s last bow.', a: 'Clincher' }
      ],
      good: 'All 8. Now mix it up: big groups, small groups, pairs and one person.',
      bad: 'Use the "What it is" column: how wide is it, how many people, and does it open, peak or close the story?' },

    { type: 'lesson', mod: 'Tell the Story', title: 'Composition words', html:
      '<div class="grid2"><div>' + tips(['<b>CVI:</b> Center of Visual Interest. The main subject. It should stand out.', '<b>Rule of thirds:</b> CVI where the tic-tac-toe lines cross. Turn on the grid on your back screen.', '<b>Leading lines:</b> lines that pull the eye to the CVI. Lockers, seat rows, lab tables.', '<b>Framing:</b> doorways, stage curtains, arms.', '<b>Fill the frame:</b> get close. Cut empty space.', '<b>Depth + layers:</b> something in front, middle and back. Shoot past a student to the teacher.', '<b>Selective focus:</b> low f-number. CVI sharp, the rest soft.', '<b>Simplicity:</b> clean background. Nothing grows out of a head.']) + '</div><div>' +
      tips(['<b>Bird\'s-eye view:</b> high, looking down. Auditorium balcony, stairs.', '<b>Worm\'s-eye view:</b> low, looking up. Speaker at a podium.', '<b>Repetition:</b> a pattern of the same shape. Band chairs, choir rows, microscopes.', '<b>Shapes:</b> curves, triangles and circles add energy.', '<b>Reaction:</b> emotion, emotion, emotion. Faces tell the story.', '<b>Lighting:</b> look at the light on the CVI. Avoid shadows on faces.', '<b>Blur + panning:</b> slow shutter, follow the subject.', '<b>Golden hour:</b> warm light just after sunrise and before sunset.']) + '</div></div>' },

    { type: 'match', id: 'comp', mod: 'Tell the Story', title: 'Name the technique',
      scenario: 'Photos up for this week\'s staff critique.',
      q: 'Match each photo to the composition word it shows best.',
      choices: ['Leading lines', 'Worm\'s-eye view', 'Repetition', 'Framing', 'Depth + layers', 'Simplicity'],
      rows: [
        { p: 'A long row of lockers pulls your eye to one student at the end.', a: 'Leading lines' },
        { p: 'Shot from low, looking up at the speaker at the podium.', a: 'Worm\'s-eye view' },
        { p: 'Rows of identical microscopes on the lab tables.', a: 'Repetition' },
        { p: 'An actor seen between the stage curtains.', a: 'Framing' },
        { p: 'Shot past a student\'s shoulder to the teacher at the board.', a: 'Depth + layers' },
        { p: 'You moved so the pole stopped "growing out" of her head.', a: 'Simplicity' }
      ],
      good: 'Nice eye. Naming it helps you plan it next time.',
      bad: 'Look for the clue: lines, camera height, a pattern, something around the CVI, front-to-back layers, or a clean background.' },

    { type: 'lesson', mod: 'Do It Right', title: 'Captions + ethics', html:
      '<h3>Get caption info</h3>' + tips(['<b>First and last name</b> of every person you can identify. Ask them to spell it.', '<b>Grade</b> for students. Write it like this: <b>Maya Chen (12)</b>.', '<b>Group photo?</b> Write Front Row, Second Row, Back Row. Left to right is understood.', '<b>What is happening</b>, and why it matters.', '<b>One good quote</b> from someone in the photo.', '<b>Program or roster?</b> Use it, but check spelling with a person too.']) +
      '<div class="never"><strong>CHECK THE NAME TWICE.</strong> A wrong name can\'t be fixed after the book prints.</div>' +
      '<h3>Shoot with ethics</h3>' + tips(['<b>Don\'t pose or stage moments.</b> Exception: interview portraits, which you may pose using the Interview Portraits and Posing guides. Photojournalism is real.', '<b>Respect your subjects</b>, most of all in hard or sad moments.', '<b>Be fair and accurate.</b> Don\'t twist what happened.', '<b>Respect the press pass.</b> Act like a professional.', '<b>Know the rules.</b> Follow school and community photo policies.', '<b>Not sure?</b> Ask Fitz before you shoot or publish. The Student Press Law Center can help.']) },

    { type: 'mc', id: 'caption', mod: 'Do It Right', title: 'Caption format',
      scenario: 'You photographed a senior named Jordan Ruiz building a bridge model in physics.',
      q: 'Which name format matches the guide?',
      opts: [
        { t: 'Jordan (senior)', fb: 'You need first and last name, and the grade as a number.' },
        { t: 'J. Ruiz, Grade 12', fb: 'Use the full first name, then the grade in parentheses.' },
        { t: 'Jordan Ruiz (12)', ok: true, fb: 'Right: Maya Chen (12) style. And ask Jordan to spell it. Check the name twice.' },
        { t: 'Ruiz, Jordan – 12th', fb: 'The guide\'s format is First Last (grade): Maya Chen (12).' }
      ] },

    { type: 'mc', id: 'restage', mod: 'Do It Right', title: 'Missed moment',
      scenario: 'You got to the student council meeting late and missed the vote. The president offers to have everyone raise their hands again for you.',
      q: 'What do you do?',
      opts: [
        { t: 'Take the photo; it\'s the same people and the same vote.', fb: 'That\'s a staged moment. Don\'t pose or stage moments. Photojournalism is real.' },
        { t: 'Thank them, don\'t restage it, and reschedule soon for a real moment.', ok: true, fb: 'Yes. Don\'t stage moments. Missed the shot? Reschedule soon. Next time, go early.' },
        { t: 'Restage it, but leave it out of the caption.', fb: 'That makes it inaccurate. Be fair and accurate.' },
        { t: 'Use a photo from last year\'s vote.', fb: 'That twists what happened. Be fair and accurate.' }
      ] },

    { type: 'mc', id: 'unsure', mod: 'Do It Right', title: 'Hard moment',
      scenario: 'At an assembly honoring a teacher who passed away, a student near you is crying. It\'s a powerful photo, and you\'re not sure it\'s OK.',
      q: 'What does the guide say?',
      opts: [
        { t: 'Shoot it and publish. It\'s a public event.', fb: 'Respect your subjects, most of all in hard or sad moments. When unsure, ask.' },
        { t: 'Never photograph emotion.', fb: 'Reaction and emotion are part of the story. The guide says respect your subjects, not avoid them.' },
        { t: 'Respect the subject. Not sure? Ask Fitz before you shoot or publish.', ok: true, fb: 'Right. Respect your subjects in hard moments, and ask Fitz before you shoot or publish if you\'re unsure.' },
        { t: 'Use flash so the photo is clear.', fb: 'No flash. And it would be disrespectful here.' }
      ] },

    { type: 'match', id: 'plan', mod: 'Game Plan', title: 'Capstone: your shoot plan',
      scenario: 'You\'re training a new staffer for their first non-sports assignment.',
      q: 'Sort each task into Before, During or After the shoot.',
      choices: ['Before', 'During', 'After'],
      rows: [
        { p: 'Talk to the teacher, director or sponsor about access.', a: 'Before' },
        { p: 'Scout the room and the light.', a: 'Before' },
        { p: 'Try high, low, close and wide angles.', a: 'During' },
        { p: 'Get first and last names and check spelling.', a: 'During' },
        { p: 'Upload right away and make a backup.', a: 'After' },
        { p: 'Missed the shot? Reschedule soon.', a: 'After' }
      ],
      good: 'Before, during, after. You\'re ready for your next assignment.',
      bad: 'Think about timing: is it something you do to prepare, while you\'re shooting, or once you\'re back?' },

    { type: 'finish' }
  ];

  var CHECKS = PAGES.filter(function (p) { return p.id; });
  var LESSONS = PAGES.filter(function (p) { return p.type === 'lesson'; });
  var CRITERIA = 'Completed ' + LESSONS.length + ' lessons and answered all ' + CHECKS.length + ' scenario checks correctly';

  /* ---------- state ---------- */
  var state = load();
  function fresh() { return { page: 0, answers: {}, correct: {}, name: '', completedAt: '' }; }
  function load() {
    try { var s = JSON.parse(localStorage.getItem(KEY)); if (s && typeof s.page === 'number') return Object.assign(fresh(), s); } catch (e) {}
    return fresh();
  }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {} }
  function allDone() { return CHECKS.every(function (c) { return state.correct[c.id]; }); }
  function furthest() { // first page that is a check not yet passed; cannot go past it
    for (var i = 0; i < PAGES.length; i++) if (PAGES[i].id && !state.correct[PAGES[i].id]) return i;
    return PAGES.length - 1;
  }

  var app = document.getElementById('app');
  var certUrl = null;

  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function clearCert() { if (certUrl) { URL.revokeObjectURL(certUrl); certUrl = null; } }

  /* ---------- render ---------- */
  function render() {
    state.page = Math.max(0, Math.min(state.page, furthest()));
    save();
    var p = PAGES[state.page];
    document.getElementById('resetBtn').hidden = state.page === 0 && !Object.keys(state.correct).length;
    var prog = document.getElementById('progress');
    prog.hidden = p.type === 'intro';
    if (!prog.hidden) {
      var n = PAGES.length - 1, pct = Math.round(state.page / n * 100);
      document.getElementById('progModule').textContent = p.mod || 'Finish';
      document.getElementById('progText').textContent = 'Step ' + state.page + ' of ' + n;
      document.getElementById('progFill').style.width = pct + '%';
      prog.querySelector('.bar').setAttribute('aria-valuenow', pct);
    }
    var html = '';
    if (p.type === 'intro') html = introHTML();
    else if (p.type === 'lesson') html = '<div class="kicker">Lesson · ' + p.mod + '</div><h2 tabindex="-1">' + p.title + '</h2>' + p.html + nav(true);
    else if (p.type === 'finish') html = finishHTML();
    else html = checkHTML(p);
    app.innerHTML = html;
    bind(p);
    var h = app.querySelector('h1,h2'); if (h) h.focus();
  }

  function nav(canContinue) {
    return '<div class="nav">' + (state.page > 0 ? '<button type="button" class="ghost" data-act="back">← Back</button>' : '') +
      '<div class="right-side"><button type="button" data-act="next"' + (canContinue ? '' : ' disabled') + '>Continue →</button></div></div>';
  }

  function introHTML() {
    var resume = state.page > 0 || Object.keys(state.correct).length;
    return '<div class="kicker">Yearbook photo staff training</div><h1 tabindex="-1">' + TITLE + '</h1>' +
      '<p class="lead">Classrooms, hallways, stages, clubs, ceremonies. This course walks you through the Non-Sports Photographer Guide and Quick Cards, then puts you in real assignments.</p>' +
      '<h3>You\'ll practice</h3><ul class="obj"><li>Planning before, during and after</li><li>The exposure trio + manual mode</li><li>Settings and lenses by location</li><li>Focus, metering and color</li><li>Fixing problem photos</li><li>The shot list, composition, captions + ethics</li></ul>' +
      '<div class="panel blue">' + LESSONS.length + ' short lessons · ' + CHECKS.length + ' scenario checks. Get each check right to unlock the next step. Retries are fine. Finish to earn your certificate.</div>' +
      '<p class="hint">Your progress saves in this browser only.</p>' +
      '<div class="row"><button type="button" data-act="start">' + (resume ? 'Resume course →' : 'Start →') + '</button></div>';
  }

  function checkHTML(p) {
    var passed = !!state.correct[p.id], ans = state.answers[p.id], body = '';
    if (p.type === 'mc' || p.type === 'multi') {
      var multi = p.type === 'multi';
      body = '<fieldset><legend>' + p.q + '</legend>' + p.opts.map(function (o, i) {
        var checked = ans && (multi ? ans.indexOf(i) > -1 : ans === i);
        var cls = passed && checked ? ' right' : '';
        return '<label class="choice' + cls + '"><input type="' + (multi ? 'checkbox' : 'radio') + '" name="opt" value="' + i + '"' + (checked ? ' checked' : '') + '><span>' + o.t + '</span></label>';
      }).join('') + '</fieldset>';
    } else if (p.type === 'match' || p.type === 'settings') {
      var rows = p.type === 'match' ? p.rows : p.fields;
      body = '<fieldset><legend>' + p.q + '</legend>' + rows.map(function (r, i) {
        var opts = p.type === 'match' ? p.choices : r.opts, v = ans ? ans[i] : '';
        return '<div class="match-row' + (passed ? ' right' : '') + '"><label for="sel' + i + '">' + (r.p || '<b>' + r.label + '</b>') + '</label><select id="sel' + i + '" data-i="' + i + '"><option value="">Choose…</option>' +
          opts.map(function (o) { return '<option' + (o === v ? ' selected' : '') + '>' + esc(o) + '</option>'; }).join('') + '</select></div>';
      }).join('') + '</fieldset>';
    } else if (p.type === 'order') {
      var ord = ans || p.start;
      body = '<p><b>' + p.q + '</b></p><ol class="order" aria-label="Steps in your order">' + ord.map(function (k, i) {
        return '<li class="' + (passed ? 'right' : '') + '"><span class="pos">' + (i + 1) + '</span><span class="txt">' + p.items[k] + '</span>' +
          '<button type="button" class="ghost small icon" data-move="' + i + ',-1"' + (i === 0 ? ' disabled' : '') + ' aria-label="Move ' + p.items[k] + ' up">↑</button>' +
          '<button type="button" class="ghost small icon" data-move="' + i + ',1"' + (i === ord.length - 1 ? ' disabled' : '') + ' aria-label="Move ' + p.items[k] + ' down">↓</button></li>';
      }).join('') + '</ol>';
    }
    var fb = passed ? '<div class="feedback ok" role="status"><strong>Correct!</strong>' + successText(p) + '</div>' : '';
    return '<div class="kicker">Scenario check · ' + p.mod + '</div><h2 tabindex="-1">' + p.title + '</h2>' +
      '<div class="scenario"><div class="tag">Scenario</div>' + p.scenario + '</div>' + body +
      '<div id="fb">' + fb + '</div><div class="row"><button type="button" class="secondary" data-act="check">Check answer</button></div>' + nav(passed);
  }

  function successText(p) {
    if (p.type === 'mc') return p.opts[state.answers[p.id]].fb;
    return p.good;
  }

  function finishHTML() {
    if (!allDone()) { return '<h2 tabindex="-1">Almost there</h2><p>Finish every scenario check to unlock your certificate.</p>' + nav(false); }
    return '<div class="kicker">Course complete</div><h2 tabindex="-1">You\'re ready for game day</h2>' +
      '<p class="lead">' + CRITERIA + '. Add your name to create your certificate.</p>' +
      '<label for="name"><b>Your name (as it should appear)</b></label><input type="text" id="name" maxlength="80" autocomplete="name" value="' + esc(state.name) + '">' +
      '<div class="row" style="margin-top:12px"><button type="button" data-act="cert">Create certificate</button></div>' +
      '<div id="certOut"></div>' +
      '<div class="nav"><button type="button" class="ghost" data-act="back">← Back</button></div>';
  }

  /* ---------- interactions ---------- */
  function bind(p) {
    app.querySelectorAll('[data-act]').forEach(function (b) { b.addEventListener('click', function () { act(b.getAttribute('data-act'), p); }); });
    app.querySelectorAll('[data-move]').forEach(function (b) {
      b.addEventListener('click', function () {
        var m = b.getAttribute('data-move').split(',').map(Number), ord = (state.answers[p.id] || p.start).slice(), j = m[0] + m[1];
        var t = ord[m[0]]; ord[m[0]] = ord[j]; ord[j] = t;
        state.answers[p.id] = ord; delete state.correct[p.id]; render();
        var target = app.querySelector('[data-move="' + j + ',' + m[1] + '"]') || app.querySelector('[data-move="' + j + ',' + (-m[1]) + '"]');
        if (target) target.focus();
      });
    });
    app.querySelectorAll('input[name=opt], select').forEach(function (el) {
      el.addEventListener('change', function () { if (state.correct[p.id]) { delete state.correct[p.id]; save(); lockNext(); } clearMarks(); });
    });
    var nameEl = document.getElementById('name');
    if (nameEl) {
      nameEl.addEventListener('input', function () { state.name = nameEl.value; save(); clearCert(); document.getElementById('certOut').innerHTML = ''; });
      nameEl.addEventListener('keydown', function (e) { if (e.key === 'Enter') act('cert', p); });
      if (state.name.trim()) makeCert(false);
    }
  }
  function lockNext() { var n = app.querySelector('[data-act=next]'); if (n) n.disabled = true; document.getElementById('fb').innerHTML = ''; }
  function clearMarks() { app.querySelectorAll('.right,.wrong').forEach(function (el) { el.classList.remove('right', 'wrong'); }); }

  function act(a, p) {
    if (a === 'start') { state.page = Math.max(1, state.page); render(); }
    else if (a === 'back') { state.page--; render(); }
    else if (a === 'next') { if (!p.id || state.correct[p.id]) { state.page++; render(); } }
    else if (a === 'check') grade(p);
    else if (a === 'cert') makeCert(true);
  }

  function showFb(ok, title, text) {
    var fb = document.getElementById('fb');
    fb.innerHTML = '<div class="feedback ' + (ok ? 'ok' : 'no') + '" role="' + (ok ? 'status' : 'alert') + '"><strong>' + title + '</strong>' + text + '</div>';
  }

  function grade(p) {
    clearMarks();
    var ok = false;
    if (p.type === 'mc') {
      var sel = app.querySelector('input[name=opt]:checked');
      if (!sel) return showFb(false, 'Pick an answer first.', '');
      var i = +sel.value, o = p.opts[i];
      state.answers[p.id] = i; ok = !!o.ok;
      sel.closest('.choice').classList.add(ok ? 'right' : 'wrong');
      showFb(ok, ok ? 'Correct!' : 'Not quite. Try again.', o.fb);
    } else if (p.type === 'multi') {
      var picked = [].map.call(app.querySelectorAll('input[name=opt]:checked'), function (x) { return +x.value; });
      if (!picked.length) return showFb(false, 'Select at least one answer.', '');
      state.answers[p.id] = picked;
      var missed = 0, extra = 0;
      p.opts.forEach(function (o, k) { var on = picked.indexOf(k) > -1; if (o.ok && !on) missed++; if (!o.ok && on) extra++; });
      ok = !missed && !extra;
      app.querySelectorAll('input[name=opt]:checked').forEach(function (x) { if (!p.opts[+x.value].ok) x.closest('.choice').classList.add('wrong'); else if (ok) x.closest('.choice').classList.add('right'); });
      var msg = ok ? p.good : (extra ? extra + ' selected item' + (extra > 1 ? 's don\'t' : ' doesn\'t') + ' belong (marked in red). ' : '') + (missed ? 'You\'re missing ' + missed + ' item' + (missed > 1 ? 's' : '') + '. ' : '') + (ok ? '' : p.bad);
      showFb(ok, ok ? 'Correct!' : 'Not quite. Try again.', msg);
    } else if (p.type === 'match' || p.type === 'settings') {
      var vals = [].map.call(app.querySelectorAll('select'), function (s) { return s.value; });
      state.answers[p.id] = vals;
      if (vals.some(function (v) { return !v; })) return showFb(false, 'Make a choice in every row.', ''), save();
      var wrongN = 0, hints = [];
      vals.forEach(function (v, k) {
        var good = p.type === 'match' ? p.rows[k].a === v : p.fields[k].ok.indexOf(v) > -1;
        if (!good) { wrongN++; if (p.type === 'settings') hints.push('<b>' + p.fields[k].label + ':</b> ' + p.fields[k].hint); }
        app.querySelectorAll('.match-row')[k].classList.add(good ? 'right' : 'wrong');
      });
      ok = !wrongN;
      showFb(ok, ok ? 'Correct!' : wrongN + ' to fix (marked in red). Try again.', ok ? p.good : (p.type === 'settings' ? hints.join('<br>') : p.bad));
    } else if (p.type === 'order') {
      var ord = state.answers[p.id] || p.start;
      state.answers[p.id] = ord;
      var lis = app.querySelectorAll('.order li'), wrong = 0;
      ord.forEach(function (k, idx) { var g = k === idx; if (!g) wrong++; lis[idx].classList.add(g ? 'right' : 'wrong'); });
      ok = !wrong;
      showFb(ok, ok ? 'Correct!' : wrong + ' steps are out of place. Try again.', ok ? p.good : p.bad);
    }
    if (ok) {
      state.correct[p.id] = true;
      if (allDone() && !state.completedAt) state.completedAt = new Date().toISOString();
    } else delete state.correct[p.id];
    save();
    var n = app.querySelector('[data-act=next]'); if (n) { n.disabled = !ok; if (ok) n.focus(); }
  }

  /* ---------- certificate ---------- */
  function makeCert(fromClick) {
    var out = document.getElementById('certOut'), name = state.name.trim().replace(/\s+/g, ' ');
    clearCert();
    if (!allDone()) return;
    if (!name) { out.innerHTML = '<div class="feedback no" role="alert"><strong>Enter your name first.</strong></div>'; document.getElementById('name').focus(); return; }
    var W = 1600, H = 1130, c = document.createElement('canvas'); c.width = W; c.height = H;
    var x = c.getContext('2d');
    x.fillStyle = '#ffffff'; x.fillRect(0, 0, W, H);
    var g = x.createLinearGradient(0, 0, W, 0); g.addColorStop(0, '#9a79c4'); g.addColorStop(1, '#3f8fd0');
    x.fillStyle = g; x.fillRect(0, 0, W, 26); x.fillRect(0, H - 26, W, 26);
    x.strokeStyle = '#dcd6e8'; x.lineWidth = 4; x.strokeRect(60, 70, W - 120, H - 140);
    x.textAlign = 'center'; x.fillStyle = '#7b5aa6';
    x.font = '600 30px system-ui, Segoe UI, Arial, sans-serif';
    x.fillText('2027 YEARBOOK · PHOTOGRAPHER COURSE', W / 2, 180);
    x.fillStyle = '#1f2a44'; x.font = '300 74px system-ui, Segoe UI, Arial, sans-serif';
    x.fillText('Certificate of Completion', W / 2, 290);
    x.fillStyle = '#5b6478'; x.font = '32px system-ui, Segoe UI, Arial, sans-serif';
    x.fillText('This certifies that', W / 2, 390);
    var size = 96; x.fillStyle = '#1f2a44';
    do { x.font = '700 ' + size + 'px system-ui, Segoe UI, Arial, sans-serif'; size -= 2; } while (x.measureText(name).width > W - 280 && size > 28);
    x.fillText(name, W / 2, 500);
    x.fillStyle = g; x.fillRect(W / 2 - 300, 530, 600, 4);
    x.fillStyle = '#5b6478'; x.font = '32px system-ui, Segoe UI, Arial, sans-serif';
    x.fillText('has completed', W / 2, 610);
    x.fillStyle = '#2f7fc1'; x.font = '600 52px system-ui, Segoe UI, Arial, sans-serif';
    x.fillText(TITLE, W / 2, 685);
    x.fillStyle = '#1f2a44'; x.font = '28px system-ui, Segoe UI, Arial, sans-serif';
    x.fillText(CRITERIA + '.', W / 2, 770);
    var d = new Date(state.completedAt || Date.now());
    x.fillStyle = '#5b6478'; x.font = '28px system-ui, Segoe UI, Arial, sans-serif';
    x.fillText('Completed ' + d.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' }), W / 2, 880);
    x.fillStyle = '#7b5aa6'; x.font = '300 46px system-ui, Segoe UI, Arial, sans-serif';
    x.fillText('NS', W / 2, 985);
    var forName = name;
    c.toBlob(function (blob) {
      if (state.name.trim().replace(/\s+/g, ' ') !== forName) return; // name changed while drawing
      clearCert();
      certUrl = URL.createObjectURL(blob);
      var file = 'Non-Sports-Photo-Certificate-' + forName.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^A-Za-z0-9]+/g, '-').replace(/^-|-$/g, '') + '.png';
      out.innerHTML = '<img class="cert-preview" alt="Certificate of completion for ' + esc(forName) + '" src="' + certUrl + '">' +
        '<div class="row"><a class="btn" id="dlBtn" href="' + certUrl + '" download="' + esc(file) + '">Download certificate (PNG)</a></div>' +
        '<p class="hint" style="margin-top:8px">Download not starting? <a id="saveLink" href="' + certUrl + '" download="' + esc(file) + '">Save the certificate image</a>.</p>';
      if (fromClick) document.getElementById('dlBtn').focus();
    }, 'image/png');
  }

  /* ---------- start over ---------- */
  var dlg = document.getElementById('confirm'), lastFocus = null;
  document.getElementById('resetBtn').addEventListener('click', function () { lastFocus = document.activeElement; dlg.hidden = false; document.getElementById('confirmNo').focus(); });
  function closeDlg() { dlg.hidden = true; if (lastFocus) lastFocus.focus(); }
  document.getElementById('confirmNo').addEventListener('click', closeDlg);
  document.getElementById('confirmYes').addEventListener('click', function () {
    clearCert(); state = fresh();
    try { localStorage.removeItem(KEY); } catch (e) {}
    dlg.hidden = true; render();
  });
  dlg.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeDlg();
    if (e.key === 'Tab') { // keep focus inside the dialog
      var b = dlg.querySelectorAll('button'), f = b[0], l = b[b.length - 1];
      if (e.shiftKey && document.activeElement === f) { e.preventDefault(); l.focus(); }
      else if (!e.shiftKey && document.activeElement === l) { e.preventDefault(); f.focus(); }
    }
  });

  render();
})();
