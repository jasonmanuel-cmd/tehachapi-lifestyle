import './style.css';

const arrow = '<span aria-hidden="true">↗</span>';
const places = [
  { n: '01', name: 'Tehachapi', eyebrow: 'The town connection', image: 'https://visittehachapi.com/storage/img/rAzpumyMdIcxBk09TCFnyMlqRvmN5tx2ATZk1hsk.jpg', alt: 'Tehachapi Depot Museum in the historic downtown area', text: 'A small-town hub for everyday errands, local dining, arts and a calendar that rewards a closer look.', note: 'Walk downtown · try your usual errand', href: 'https://www.liveuptehachapi.com/387/Community-Information' },
  { n: '02', name: 'Golden Hills', eyebrow: 'A valley perspective', image: 'https://visittehachapi.com/storage/img/h77Atp5BPbxgGc7qsQwQAWJ2FlpsUjp2fATHYyEu.jpg', alt: 'Golden Hills Nature Park, a nearby place to explore outdoors', text: 'A residential community just beyond the city. Compare individual properties, services and your real route into town.', note: 'Check services · drive the route', href: 'https://www.ghcsd.com/' },
  { n: '03', name: 'Bear Valley Springs', eyebrow: 'Room to roam', image: 'https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=85,fit=scale-down,width=1280/https://media-production.lp-cdn.com/media/pmpiyys9ofboriy2sygr', alt: 'Bear Valley Springs community and a lake in the mountain valley', text: 'A community with an association and recreation amenities. Access, rules and fees are worth confirming up front.', note: 'Ask about access · know the rules', href: 'https://bvsa.recdesk.com/Community/Facility/Detail?facilityId=70' },
  { n: '04', name: 'Stallion Springs', eyebrow: 'A slower look', image: 'https://www.stallionspringscsd.com/sites/g/files/vyhlif15261/files/styles/full_node_primary/public/media/parks-and-recreation/image/216/stallion_springs_lake.jpg?itok=BOGfYrvi', alt: 'Stallion Springs Lake beside Horsethief Park', text: 'A surrounding community with parks and recreation, including Horsethief Park and its covered bridge.', note: 'Explore local parks · plan your errands', href: 'https://www.stallionspringscsd.com/parks-and-recreation/page/horsethief-park' },
];

const app = document.querySelector('#app');
app.innerHTML = `
  <a class="skip-link" href="#main">Skip to content</a>
  <div class="announcement"><span class="announcement-dot"></span><span class="announcement-full">TEHACHAPI LIFESTYLE IS PROUDLY SPONSORED BY</span><span class="announcement-short">PROUDLY SPONSORED BY</span><a href="https://aspen2homes.com/" target="_blank" rel="noreferrer" aria-label="Visit Aspen 2 Homes">ASPEN 2 HOMES ↗</a></div>
  <header class="site-header" id="top">
    <a class="brand brand-image" href="#top" aria-label="Tehachapi Lifestyle home"><span class="logo-crop"><img src="/images/tehachapi-lifestyle-logo.jpg" alt="" /></span></a>
    <button class="menu-toggle" aria-label="Open navigation" aria-expanded="false"><span></span><span></span></button>
    <nav class="main-nav" aria-label="Main navigation">
      <a href="#lifestyle">The lifestyle</a><a href="#wine">Wine & weekends</a><a href="#places">Find your place</a><a href="#moving">The move</a><a href="#faq">FAQs</a>
      <a class="nav-cta" href="#fit">Find your fit <span>↗</span></a>
    </nav>
  </header>
  <main id="main">
    <section class="hero" aria-labelledby="hero-title">
      <video class="hero-video" muted loop playsinline webkit-playsinline preload="none" poster="https://images.pexels.com/videos/15687652/pexels-photo-15687652.jpeg?auto=compress&w=960&h=540&dpr=1" aria-label="Aerial video of a rugged mountain landscape">
        <source src="https://videos.pexels.com/video-files/15687652/15687652-uhd_2560_1440_25fps.mp4" type="video/mp4" />
      </video>
      <div class="hero-shade"></div><div class="hero-grain"></div>
      <div class="hero-inner">
        <div class="eyebrow hero-kicker"><span class="sun-icon">✳</span> A WEEKEND WORTH TAKING. A PLACE WORTH KNOWING.</div>
        <h1 id="hero-title">Leave the noise.<br><em>Keep California.</em></h1>
        <p class="hero-copy">Come for mountain views and locally grown wine. Stay for a day, make a weekend of it, and see whether the everyday rhythm feels like yours.</p>
        <div class="hero-actions"><a class="button button-light" href="#weekend">Plan a visit <span>↗</span></a><a class="text-link light-link" href="#moving">Imagine everyday life <span>↓</span></a></div>
        <p class="hero-origins">FROM THE LA BASIN · BAKERSFIELD · ANTELOPE VALLEY · AND BEYOND</p>
      </div>
      <div class="hero-caption"><span class="caption-line"></span><span>TEHACHAPI MOUNTAINS, CALIFORNIA</span><span class="caption-credit">A closer look at mountain living</span></div>
      <button class="motion-toggle" type="button" aria-pressed="true"><span class="motion-state">Ⅱ</span> Pause motion</button>
      <a class="scroll-cue" href="#lifestyle" aria-label="Scroll to discover"><span></span> SCROLL TO DISCOVER</a>
      <div class="hero-stamp"><span>ROOM TO<br>BREATHE</span><i>✳</i></div>
    </section>

    <div class="ticker" aria-label="Tehachapi lifestyle highlights"><div class="ticker-track">${Array.from({ length: 2 }, () => '<span>A weekend well spent</span><i>✳</i><span>Vineyard afternoons</span><i>✳</i><span>Mountain air</span><i>✳</i><span>Still California</span><i>✳</i>').join('')}</div></div>

    <section class="amenities-overview section-pad" aria-labelledby="amenities-title">
      <div class="amenities-heading">
        <div><span class="eyebrow"><span class="sun-icon">✳</span> THE TEHACHAPI SHORT LIST</span><h2 id="amenities-title">Wine country. Open trails.<br><em>Room to make it yours.</em></h2></div>
        <div class="amenities-lead"><p>Come for a weekend from Los Angeles, Bakersfield, Palmdale–Lancaster, or beyond. Taste local wine, get outside, explore downtown—and see which parts make you want to come back.</p><a href="#weekend">Build your visit <span>↗</span></a><a href="#moving">Thinking about a move? <span>↗</span></a></div>
      </div>
      <div class="amenity-grid">
        <a class="amenity-card" href="#wine"><span class="amenity-number">01 / SIP</span><span class="amenity-icon">◒</span><h3>Mountain wine life</h3><p>Explore the Tehachapi Mountains AVA, from Cummings Valley vineyards to downtown tasting rooms.</p><span class="amenity-link">Meet the wine country ↗</span></a>
        <a class="amenity-card" href="https://visittehachapi.com/see_and_do" target="_blank" rel="noreferrer"><span class="amenity-number">02 / OUTSIDE</span><span class="amenity-icon">↟</span><h3>Trails, lakes & open air</h3><p>Find local trails, parks and recreation spots for a hike, lakeside pause or long afternoon outdoors.</p><span class="amenity-link">Explore outdoor activities ↗</span></a>
        <a class="amenity-card" href="https://visittehachapi.com/see_and_do" target="_blank" rel="noreferrer"><span class="amenity-number">03 / DOWNTOWN</span><span class="amenity-icon">⌂</span><h3>Small-town character</h3><p>Browse local food, arts, shops, museums and events, then find your own favorite stop.</p><span class="amenity-link">See what’s happening ↗</span></a>
        <a class="amenity-card" href="https://visittehachapi.com/attractions/12" target="_blank" rel="noreferrer"><span class="amenity-number">04 / LANDMARK</span><span class="amenity-icon">〰</span><h3>The Tehachapi Loop</h3><p>A memorable railroad landmark in the mountains and an easy reason to take the scenic way.</p><span class="amenity-link">Plan a Loop visit ↗</span></a>
      </div>
      <p class="amenities-footnote">Hours, access, event calendars and seasonal conditions vary—check official sources before you go.</p>
    </section>

    <section class="wine-section section-pad" id="wine">
      <div class="section-label"><span>LOCAL FLAVOR / WINE COUNTRY</span><span>THE TEHACHAPI MOUNTAINS AVA</span></div>
      <div class="wine-layout">
        <a class="wine-photo reveal" href="https://tehachapiwineandcattlecompany.com/visit/" target="_blank" rel="noreferrer" aria-label="Visit the Tehachapi Wine and Cattle Company tasting room">
          <img src="https://i0.wp.com/tehachapiwineandcattlecompany.com/wp-content/uploads/2023/07/white_wine-min.jpg?resize=1000%2C1500&ssl=1" alt="A bottle and glass of wine from Tehachapi Wine and Cattle Company" loading="lazy" referrerpolicy="no-referrer">
          <span class="wine-photo-tag">A LOCAL POUR · TEHACHAPI WINE & CATTLE CO. <span>↗</span></span>
        </a>
        <div class="wine-copy reveal">
          <span class="eyebrow"><span class="sun-icon">✳</span> SIP SLOW. STAY A LITTLE LONGER.</span>
          <h2 class="display-heading">A little vineyard time.<br><em>A lot of mountain air.</em></h2>
          <p>The Tehachapi Mountains AVA has tasting rooms among the Cummings Valley foothills and right in historic downtown. Pair a local pour with a mountain drive, trail time, the famous Tehachapi Loop, or a relaxed afternoon in town. There’s more than one way to make a weekend of it.</p>
          <div class="wine-places"><a href="https://triassicvineyards.com/" target="_blank" rel="noreferrer"><span>01</span><b>Vineyard tasting rooms</b><i>Explore the foothills ↗</i></a><a href="https://strayleaves.wine/" target="_blank" rel="noreferrer"><span>02</span><b>Downtown wine tasting</b><i>Stay close to town ↗</i></a></div>
          <a class="under-link" href="https://tehachapimountainswinegrowers.com/" target="_blank" rel="noreferrer">Meet the local wine growers ${arrow}</a>
          <p class="wine-note">Hours, reservations, tastings and events vary by winery; check directly before you go. Please taste responsibly and plan a safe ride.</p>
        </div>
      </div>
    </section>

    <section class="intro section-pad" id="lifestyle">
      <div class="section-label"><span>01 / THE LIFESTYLE</span><span>LESS RUSH. MORE LIFE.</span></div>
      <div class="intro-grid">
        <h2 class="display-heading reveal">Come for the views.<br><em>Get to know</em><br>the everyday.</h2>
        <div class="intro-copy reveal"><p class="lead">What does an ordinary week look like here?</p><p>A walk outdoors, a stop downtown, a local event you decide to try. It can also mean planning around wind, winter weather or a trip out of town.</p><p>Get beyond the weekend view and see how Tehachapi fits the way you actually live.</p><a class="under-link" href="#fit">Let’s figure that out ${arrow}</a></div>
      </div>
      <div class="story-image reveal"><img src="https://tehachapi-lifestyle.tattoobillyvon.chatgpt.site/assets/valley.webp" alt="Looking north from Cummings Mountain toward the Sierra crest and surrounding peaks" loading="lazy" referrerpolicy="no-referrer"><div class="image-index">A NEW POINT OF VIEW <span>↗</span></div><div class="image-note"><span class="small-sun">✳</span><span>Wide-open views.<br><i>A little more room.</i></span></div><span class="image-caption">Looking north from Cummings Mountain</span></div>
      <div class="value-grid">
        <article class="value-card reveal"><span class="value-icon">↟</span><h3>Outside can be part of the day.</h3><p>Explore local trails, parks and outdoor places, then check what’s genuinely convenient from the address you’re considering.</p></article>
        <article class="value-card reveal"><span class="value-icon">☼</span><h3>Get to know the seasons.</h3><p>Wind and winter weather are part of the conversation. Elevation, exposure and access roads matter.</p></article>
        <article class="value-card reveal"><span class="value-icon">⌁</span><h3>A different pace has tradeoffs.</h3><p>Fewer choices can feel refreshing or inconvenient. Spend time downtown and try an ordinary errand.</p></article>
      </div>
    </section>

    <section class="fit-section section-pad" id="fit">
      <div class="fit-orb orb-one"></div><div class="fit-orb orb-two"></div>
      <div class="section-label light-label"><span>02 / FIND YOUR FIT</span><span>A LITTLE CLARITY, BEFORE THE DRIVE</span></div>
      <div class="fit-layout"><div class="fit-intro reveal"><div class="eyebrow"><span class="sun-icon">✳</span> YOUR PRIORITIES, YOUR PLACE</div><h2 class="display-heading">Your kind of<br><em>mountain life.</em></h2><p>A mountain move should work on a Tuesday, too. What matters most in your ordinary week?</p><div class="fit-meta"><span>↗ ABOUT 1 MINUTE</span><span>·</span><span>NO EMAIL NEEDED</span></div></div>
        <div class="fit-card reveal"><div class="fit-card-top"><span>QUICK REFLECTION</span><span class="fit-step">01 — 03</span></div><h3>What are you hoping to find?</h3><p class="fit-hint">Choose the one that feels most like you right now.</p>
          <div class="fit-options" role="group" aria-label="Choose your lifestyle priority">
            <button class="fit-option" data-fit="outdoors"><span class="option-icon">↟</span><span><b>More time outside</b><small>Trails, views, breathing room</small></span><span class="option-radio"></span></button>
            <button class="fit-option" data-fit="balance"><span class="option-icon">✳</span><span><b>A little of everything</b><small>Town convenience + open space</small></span><span class="option-radio"></span></button>
            <button class="fit-option" data-fit="quiet"><span class="option-icon">☼</span><span><b>A slower daily rhythm</b><small>More quiet, fewer distractions</small></span><span class="option-radio"></span></button>
          </div>
          <div class="fit-result" aria-live="polite"><span class="result-icon">✳</span><div><b>Your next step appears here.</b><p>Pick a priority to get a useful first question for your visit.</p></div></div>
          <div class="fit-card-footer"><span>Your answers stay on this device.</span><a href="#moving">See the visit guide →</a></div>
        </div></div>
    </section>

    <section class="places-section section-pad" id="places">
      <div class="section-label"><span>03 / EXPLORE THE AREA</span><span>ONE REGION. DIFFERENT WAYS TO LIVE.</span></div>
      <div class="places-heading"><h2 class="display-heading reveal">Find your corner<br><em>of the mountains.</em></h2><p class="reveal">Tehachapi is more than a single name on a map. Explore the city and nearby communities with your daily routine in mind.</p></div>
      <div class="place-grid">${places.map((place) => `<article class="place-card reveal"><a class="place-photo" href="${place.href}" target="_blank" rel="noreferrer" aria-label="Explore ${place.name}"><img src="${place.image.startsWith('http') ? place.image : `/${place.image}`}" alt="${place.alt}" loading="lazy" referrerpolicy="no-referrer"><span class="place-number">${place.n}</span><span class="place-arrow">↗</span></a><div class="place-info"><div class="place-eyebrow">${place.eyebrow}</div><h3>${place.name}</h3><p>${place.text}</p><div class="visit-note"><span>↗</span> ${place.note}</div><a class="under-link" href="${place.href}" target="_blank" rel="noreferrer">Explore the community ${arrow}</a></div></article>`).join('')}</div>
      <p class="fine-print">Community details link to city, district and association sources. Amenities, access and fees should be confirmed directly.</p>
    </section>

    <section class="move-section" id="moving">
      <div class="move-visual reveal"><img src="https://visittehachapi.com/storage/img/RpV287bujvCldsHaH0lXnCAbYoSN3QiKGLehhNs9.jpg" alt="The Tehachapi Loop, a landmark railroad route through the mountains" loading="lazy" referrerpolicy="no-referrer"><div class="move-photo-label"><span>THE PRACTICAL SIDE</span><i>01 / 04</i></div><div class="move-image-copy">Love the view.<br><em>Check the details.</em></div></div>
      <div class="move-content section-pad"><div class="section-label"><span>04 / THE PRACTICAL SIDE</span><span>MAKE IT A THOUGHTFUL MOVE.</span></div><h2 class="display-heading reveal">Moving to<br><em>Tehachapi.</em></h2><p class="move-lead reveal">A good relocation plan starts with the details that shape a normal week.</p>
        <div class="move-list">
          <article class="move-item reveal"><span class="move-count">01</span><div><h3>Compare the whole cost.</h3><p>Look beyond the price or rent: taxes, insurance, utilities, maintenance, association fees where applicable, and travel.</p></div><span class="move-plus">↗</span></article>
          <article class="move-item reveal"><span class="move-count">02</span><div><h3>Test your actual address.</h3><p>Confirm internet availability, upload speeds, mobile reception and installation details. Try a video call.</p></div><span class="move-plus">↗</span></article>
          <article class="move-item reveal"><span class="move-count">03</span><div><h3>Do a normal-day test.</h3><p>Find your grocery run, healthcare providers, prescriptions and favorite activities. Try them during a visit.</p></div><span class="move-plus">↗</span></article>
          <article class="move-item reveal"><span class="move-count">04</span><div><h3>Plan for the whole year.</h3><p>Ask about winter access, drainage, wildfire exposure, insurance availability and property upkeep.</p></div><span class="move-plus">↗</span></article>
        </div>
        <a class="button button-dark reveal" href="https://quickmap.dot.ca.gov/" target="_blank" rel="noreferrer">Check road conditions <span>↗</span></a>
      </div>
    </section>

    <section class="visit-section section-pad" id="weekend">
      <div class="visit-copy reveal"><span class="eyebrow"><span class="sun-icon">✳</span> YOUR NEXT GOOD WEEKEND</span><h2 class="display-heading">Come for a visit.<br>Leave with a feel<br><em>for the place.</em></h2><p class="visit-intro">From the LA Basin, Bakersfield, the Antelope Valley and beyond: shape a trip around wine country, fresh air and a slower downtown afternoon. If you’re move-curious, add a drive through the communities you’re considering.</p><a class="button button-light" href="https://visittehachapi.com/see_and_do" target="_blank" rel="noreferrer">Explore things to do <span>↗</span></a><a class="visit-move-link" href="#fit">Thinking about staying longer? Try the fit guide ↓</a></div>
      <div class="visit-image reveal"><img src="https://visittehachapi.com/storage/img/2zT4LOK4bz0cnYznmdc53sLYwkZDl4Hif32ebuBO.jpg" alt="Brite Lake Recreation Area in Tehachapi" loading="lazy" referrerpolicy="no-referrer"><div class="route-card"><span class="route-top">A WEEKEND TO MAKE YOUR OWN</span><div class="route-step"><span>01</span> Start downtown</div><div class="route-step"><span>02</span> Taste local wine or grab a bite</div><div class="route-step"><span>03</span> See the Tehachapi Loop or find a trail</div><div class="route-step"><span>04</span> Catch a local event or mountain sunset</div><div class="route-end"><i></i> Take the long way through town.</div></div></div>
    </section>

    <section class="faq-section section-pad" id="faq">
      <div class="section-label"><span>05 / BEFORE YOU PACK</span><span>GOOD QUESTIONS. HONEST STARTING POINTS.</span></div>
      <div class="faq-layout"><div class="faq-heading reveal"><h2 class="display-heading">Curious?<br><em>Start here.</em></h2><p>The useful questions don’t always fit on a postcard. Here are a few good ones to take with you.</p><a href="#sources" class="under-link">Explore our local sources ${arrow}</a></div>
        <div class="faq-list">${[
          ['Can I make a weekend of visiting Tehachapi?', 'Absolutely. Combine a downtown stroll, local tasting rooms, the Tehachapi Loop or outdoor time. Browse the current <a href="https://visittehachapi.com/see_and_do" target="_blank" rel="noreferrer">visitor activities</a> and <a href="https://tehachapimountainswinegrowers.com/" target="_blank" rel="noreferrer">wine-grower directory</a>, then confirm hours and events directly.'],
          ['What is the local wine scene like?', 'Tehachapi is part of the Tehachapi Mountains American Viticultural Area. Find tasting rooms in Cummings Valley and downtown; hours, appointments and event schedules vary, so check with each winery before you go.'],
          ['Is Tehachapi quiet?', 'Many people describe a slower pace and more outdoor space, but quiet depends on the location. Wind, road activity and trains can be part of the setting. Visit the specific area at different times and decide what feels right to you.'],
          ['How much does the weather vary?', 'Expect seasons, and ask practical questions about wind and winter travel. Exposure and elevation can change the experience from one property to another. Check access roads and current travel conditions.'],
          ['Will I need to leave town for things?', 'That depends on your routine. Make a list of the shopping, services, work trips and activities you use regularly. Try those errands during a visit.'],
          ['Does the location within the area matter?', 'Yes. Compare Tehachapi city, Golden Hills, Stallion Springs and Bear Valley Springs separately. Driving, services, property rules and amenity access differ. Confirm details for the address.'],
          ['Can I work remotely from Tehachapi?', 'Check service availability, upload speeds and mobile reception for the exact address. Test video calls and ask providers about installation and backup options before making a decision.'],
        ].map(([q, a], i) => `<details class="faq-item reveal" ${i === 0 ? 'open' : ''}><summary><span>${q}</span><span class="faq-toggle">+</span></summary><div class="faq-answer">${a}</div></details>`).join('')}</div>
      </div>
    </section>

    <section class="inquiry-section" id="inquiry">
      <div class="inquiry-text"><span class="eyebrow"><span class="sun-icon">✳</span> YOUR NEXT CHAPTER</span><h2 class="display-heading">Let’s put your<br><em>move into focus.</em></h2><p>Turn your priorities into a simple inquiry brief for a conversation about Tehachapi living or Aspen 2 Homes building options.</p><div class="sponsor-mark">TEHACHAPI LIFESTYLE IS SPONSORED BY <b>ASPEN 2 HOMES</b></div></div>
      <form class="brief-form" id="brief-form"><div class="form-heading"><span>YOUR TEHACHAPI PLAN</span><span class="form-spark">✳</span></div><p>Planning a visit or exploring a move? Start with what matters—no contact details needed.</p>
        <label>Coming from<select name="from"><option>LA Basin</option><option>Bakersfield area</option><option>Palmdale / Lancaster</option><option>Central Valley</option><option>Somewhere else</option></select></label>
        <label>Your timeline<select name="timeline"><option>Just exploring</option><option>Within 3 months</option><option>3–6 months</option><option>6–12 months</option></select></label>
        <label>What would you like to explore?<select name="topic"><option>Tehachapi lifestyle and area questions</option><option>Aspen 2 Homes building options</option><option>Planning a visit</option></select></label>
        <label>What would make the move work for you?<textarea name="notes" rows="3" placeholder="Share a priority or question…"></textarea></label>
        <button class="button button-dark form-submit" type="submit">Create my visit / move brief <span>↗</span></button>
        <small class="form-privacy">Your brief is created on this device. It is not sent anywhere.</small>
      </form>
      <div class="brief-output" role="status" aria-live="polite" hidden><button class="output-close" aria-label="Close brief">×</button><span class="eyebrow">YOUR BRIEF IS READY</span><h3>Your Tehachapi plan, on one page.</h3><p class="output-copy"></p><div class="output-actions"><button class="copy-brief">Copy brief</button><button class="download-brief">Download ↓</button></div><small>It has not been sent.</small></div>
    </section>
  </main>
  <footer class="site-footer" id="about">
    <div class="footer-main"><a class="brand brand-image footer-brand" href="#top" aria-label="Tehachapi Lifestyle home"><span class="logo-crop"><img src="/images/tehachapi-lifestyle-logo.jpg" alt="" /></span></a><p>Mountain living.<br><em>A closer look at everyday life.</em></p><a class="back-top" href="#top">BACK TO THE TOP ↑</a></div>
    <div class="footer-details" id="sources"><div><span class="footer-label">PLAN YOUR TRIP</span><a href="https://visittehachapi.com/see_and_do" target="_blank" rel="noreferrer">Visit Tehachapi: things to do ↗</a><a href="https://tehachapimountainswinegrowers.com/" target="_blank" rel="noreferrer">Tehachapi Mountain Wine Growers ↗</a><a href="https://www.liveuptehachapi.com/387/Community-Information" target="_blank" rel="noreferrer">City of Tehachapi ↗</a><a href="https://quickmap.dot.ca.gov/" target="_blank" rel="noreferrer">Check Caltrans road conditions ↗</a></div><div><span class="footer-label">A NOTE ON THIS GUIDE</span><p>This is an editorial planning guide, not a resident survey or a recommendation to buy. Community details, access and fees should be confirmed directly. Scenic photographs show the broader Tehachapi region, not a listed property.</p></div><div><span class="footer-label">YOUR PRIVACY</span><p>This site uses no advertising trackers or inquiry inbox. Quiz answers and brief details stay in page memory and clear when you leave. Copying or downloading makes a copy you control.</p></div></div>
    <div class="footer-bottom"><span>© 2026 TEHACHAPI LIFESTYLE</span><span>MADE FOR A CLOSER LOOK <i>✳</i></span><a href="#sources">Sources & privacy</a></div>
  </footer>
`;

// Motion, navigation and small interactive tools
const motionButton = document.querySelector('.motion-toggle');
const heroVideo = document.querySelector('.hero-video');
const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
const saveData = Boolean(connection?.saveData) || /(^|-)2g$/.test(connection?.effectiveType || '');
const staticHero = motionPreference.matches || saveData;
let userPausedHero = staticHero;

function updateMotionButton(playing) {
  motionButton.setAttribute('aria-pressed', String(playing));
  motionButton.innerHTML = `<span class="motion-state">${playing ? 'Ⅱ' : '▶'}</span> ${playing ? 'Pause motion' : 'Play motion'}`;
}

function playHeroVideo() {
  heroVideo.play().then(() => updateMotionButton(true)).catch(() => updateMotionButton(false));
}

if (staticHero) {
  heroVideo.pause();
  updateMotionButton(false);
} else {
  userPausedHero = false;
  playHeroVideo();
}

motionButton.addEventListener('click', () => {
  if (!heroVideo.paused) {
    userPausedHero = true;
    heroVideo.pause();
    updateMotionButton(false);
  } else {
    userPausedHero = false;
    playHeroVideo();
  }
});

document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    heroVideo.pause();
    updateMotionButton(false);
  } else if (!staticHero && !userPausedHero) {
    playHeroVideo();
  }
});

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
function setMenuOpen(open) {
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  nav.classList.toggle('is-open', open);
}

menuToggle.addEventListener('click', () => {
  setMenuOpen(menuToggle.getAttribute('aria-expanded') !== 'true');
});
nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMenuOpen(false)));
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
    setMenuOpen(false);
    menuToggle.focus();
  }
});

const fitResponses = {
  outdoors: ['A little field time goes a long way.', 'Try one local trail, then check how far everyday services are from the address you like.'],
  balance: ['Start with your normal Tuesday.', 'Visit downtown, do an everyday errand and drive the route between home and town.'],
  quiet: ['Get curious about the setting.', 'Visit at different times of day and ask about wind, road activity, trains and winter access for a specific property.'],
};
document.querySelectorAll('.fit-option').forEach((button) => button.addEventListener('click', () => {
  document.querySelectorAll('.fit-option').forEach((option) => option.classList.remove('selected'));
  button.classList.add('selected');
  const [title, detail] = fitResponses[button.dataset.fit];
  document.querySelector('.fit-result').innerHTML = `<span class="result-icon">✳</span><div><b>${title}</b><p>${detail}</p></div>`;
}));

const form = document.querySelector('#brief-form');
const output = document.querySelector('.brief-output');
let briefText = '';
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const note = data.get('notes')?.trim() || 'No additional notes yet.';
  const topic = data.get('topic');
  const nextStep = topic === 'Planning a visit'
    ? 'Before you go: check current winery hours, event calendars, road conditions and any reservation requirements.'
    : topic === 'Aspen 2 Homes building options'
      ? 'Next step: make a visit, compare communities and prepare questions about the specific home and build options.'
      : 'Next step: visit the specific community, try an ordinary errand and verify services for the address you are considering.';
  briefText = `TEHACHAPI LIFESTYLE — VISIT / MOVE PLAN\n\nComing from: ${data.get('from')}\nTimeline: ${data.get('timeline')}\nInterested in: ${topic}\n\nWhat matters to you:\n${note}\n\n${nextStep}`;
  output.querySelector('.output-copy').textContent = briefText;
  output.hidden = false;
  output.scrollIntoView({ behavior: motionPreference.matches ? 'auto' : 'smooth', block: 'center' });
});
output.querySelector('.copy-brief').addEventListener('click', async () => {
  try { await navigator.clipboard.writeText(briefText); output.querySelector('.copy-brief').textContent = 'Copied ✓'; }
  catch { output.querySelector('.output-copy').focus?.(); }
});
output.querySelector('.download-brief').addEventListener('click', () => {
  const link = document.createElement('a');
  link.href = URL.createObjectURL(new Blob([briefText], { type: 'text/plain' }));
  link.download = 'tehachapi-visit-move-plan.txt'; link.click(); URL.revokeObjectURL(link.href);
});
output.querySelector('.output-close').addEventListener('click', () => { output.hidden = true; });

const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
  if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
}), { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
