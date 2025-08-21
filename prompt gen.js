
const helperBtns = document.querySelectorAll('.helper-btn');
helperBtns.forEach(btn => btn.onclick = () => btn.classList.toggle('selected'));

document.getElementById('generateBtn').onclick = function(){
  const data = new FormData(document.getElementById('promptForm'));
  const category = (data.get('category')||'').trim();
  const topic = (data.get('topic')||'').trim();
  const desc = (data.get('desc')||'').trim();
  const lang = (data.get('lang')||'').trim();
  const tone = (data.get('tone')||'').trim();
  const level = (data.get('level')||'').trim();
  const persona = (data.get('persona')||'').trim();
  const keywords = (data.get('keywords')||'').trim();
  const repeatKeywords = (data.get('repeatKeywords')||'').trim();
  const size = (data.get('size')||'').trim();

  let helpers = [];
  helperBtns.forEach(btn => { if(btn.classList.contains('selected')) helpers.push(btn.dataset.value); });

  
  let prompt = '';

if(category==='article'){
    prompt += persona ? `You are "${persona}".` : "You are an expert content creator.";
    prompt += ` Create an Article on "${topic}" in "${lang} language" with a "${tone.toLowerCase()} tone".`;
    prompt += ` description "${desc}"`;
    if(keywords) prompt += ` Include keywords: "${keywords}".`;
    if(repeatKeywords) prompt += ` Repeat these keywords multiple times and multiple places"${repeatKeywords}".`;
    if(size) prompt += ` Content length: approximately "${size} words".`;
    if(helpers.length) prompt += ` Apply style helpers: "${helpers.join(', ')}".`;
    prompt += ` Easy for "${level} readers".`;
}

else if(category==='blog-article'){
    prompt += persona ? `You are "${persona}".` : "You are an expert blog writer.";
    prompt += ` Create a Blog Article on "${topic}" in "${lang} language" with a "${tone.toLowerCase()} tone".`;
    prompt += ` description "${desc}"`;
    if(keywords) prompt += ` Include keywords: "${keywords}".`;
    if(repeatKeywords) prompt += ` Repeat these keywords multiple times and multiple places"${repeatKeywords}".`;
    if(size) prompt += ` Content length: approximately "${size} words".`;
    if(helpers.length) prompt += ` Apply style helpers: "${helpers.join(', ')}".`;
    prompt += ` Easy for "${level} readers".`;
}

else if(category==='news-related'){
    prompt += persona ? `You are "${persona}".` : "You are a professional news reporter.";
    prompt += ` Write a News Article on "${topic}" in "${lang} language" with a "${tone.toLowerCase()} tone".`;
    prompt += ` description "${desc}"`;
    if(keywords) prompt += ` Include keywords: "${keywords}".`;
    if(repeatKeywords) prompt += ` Repeat these keywords multiple times and multiple places"${repeatKeywords}".`;
    if(size) prompt += ` Content length: approximately "${size} words".`;
    if(helpers.length) prompt += ` Apply style helpers: "${helpers.join(', ')}".`;
    prompt += ` Easy for "${level} readers".`;
}

else if(category==='tutorial'){
    prompt += persona ? `You are "${persona}".` : "You are an expert tutorial creator.";
    prompt += ` Create a Tutorial on "${topic}" in "${lang} language" with a "${tone.toLowerCase()} tone".`;
    prompt += ` description "${desc}"`;
    if(keywords) prompt += ` Include keywords: "${keywords}".`;
    if(repeatKeywords) prompt += ` Repeat these keywords multiple times and multiple places"${repeatKeywords}".`;
    if(size) prompt += ` Content length: approximately "${size} words".`;
    if(helpers.length) prompt += ` Apply style helpers: "${helpers.join(', ')}".`;
    prompt += ` Easy for "${level} readers".`;
}

else if(category==='how-to-guide'){
    prompt += persona ? `You are "${persona}".` : "You are an expert guide writer.";
    prompt += ` Write a How-to Guide on "${topic}" in "${lang} language" with a "${tone.toLowerCase()} tone".`;
    prompt += ` description "${desc}"`;
    if(keywords) prompt += ` Include keywords: "${keywords}".`;
    if(repeatKeywords) prompt += ` Repeat these keywords multiple times and multiple places"${repeatKeywords}".`;
    if(size) prompt += ` Content length: approximately "${size} words".`;
    if(helpers.length) prompt += ` Apply style helpers: "${helpers.join(', ')}".`;
    prompt += ` Easy for "${level} readers".`;
}

else if(category==='opinion-editorial'){
    prompt += persona ? `You are "${persona}".` : "You are an experienced opinion writer.";
    prompt += ` Write an Opinion / Editorial on "${topic}" in "${lang} language" with a "${tone.toLowerCase()} tone".`;
    prompt += ` description "${desc}"`;
    if(keywords) prompt += ` Include keywords: "${keywords}".`;
    if(repeatKeywords) prompt += ` Repeat these keywords multiple times and multiple places"${repeatKeywords}".`;
    if(size) prompt += ` Content length: approximately "${size} words".`;
    if(helpers.length) prompt += ` Apply style helpers: "${helpers.join(', ')}".`;
    prompt += ` Easy for "${level} readers".`;
}

else if(category==='review'){
    prompt += persona ? `You are "${persona}".` : "You are an expert reviewer.";
    prompt += ` Write a Review on "${topic}" in "${lang} language" with a "${tone.toLowerCase()} tone".`;
    prompt += ` description "${desc}"`;
    if(keywords) prompt += ` Include keywords: "${keywords}".`;
    if(repeatKeywords) prompt += ` Repeat these keywords multiple times and multiple places"${repeatKeywords}".`;
    if(size) prompt += ` Content length: approximately "${size} words".`;
    if(helpers.length) prompt += ` Apply style helpers: "${helpers.join(', ')}".`;
    prompt += ` Easy for "${level} readers".`;
}

else if(category==='listicle'){
    prompt += persona ? `You are "${persona}".` : "You are an expert listicle writer.";
    prompt += ` Create a Listicle on "${topic}" in "${lang} language" with a "${tone.toLowerCase()} tone".`;
    prompt += ` description "${desc}"`;
    if(keywords) prompt += ` Include keywords: "${keywords}".`;
    if(repeatKeywords) prompt += ` Repeat these keywords multiple times and multiple places"${repeatKeywords}".`;
    if(size) prompt += ` Content length: approximately "${size} words".`;
    if(helpers.length) prompt += ` Apply style helpers: "${helpers.join(', ')}".`;
    prompt += ` Easy for "${level} readers".`;
}

else if(category==='case-study'){
    prompt += persona ? `You are "${persona}".` : "You are an expert case study researcher.";
    prompt += ` Write a Case Study on "${topic}" in "${lang} language" with a "${tone.toLowerCase()} tone".`;
    prompt += ` description "${desc}"`;
    if(keywords) prompt += ` Include keywords: "${keywords}".`;
    if(repeatKeywords) prompt += ` Repeat these keywords multiple times and multiple places"${repeatKeywords}".`;
    if(size) prompt += ` Content length: approximately "${size} words".`;
    if(helpers.length) prompt += ` Apply style helpers: "${helpers.join(', ')}".`;
    prompt += ` Easy for "${level} readers".`;
}

else if(category==='interview'){
    prompt += persona ? `You are "${persona}".` : "You are an expert interviewer.";
    prompt += ` Conduct an Interview on "${topic}" in "${lang} language" with a "${tone.toLowerCase()} tone".`;
    prompt += ` description "${desc}"`;
    if(keywords) prompt += ` Include keywords: "${keywords}".`;
    if(repeatKeywords) prompt += ` Repeat these keywords multiple times and multiple places"${repeatKeywords}".`;
    if(size) prompt += ` Content length: approximately "${size} words".`;
    if(helpers.length) prompt += ` Apply style helpers: "${helpers.join(', ')}".`;
    prompt += ` Easy for "${level} readers".`;
} 

  else if(category==='feature-article'){
    prompt += persona ? `You are "${persona}".` : "You are an expert feature writer.";
    prompt += ` Create a Feature Article on "${topic}" in "${lang} language" with a "${tone.toLowerCase()} tone".`;
    prompt += ` description "${desc}"`;
    if(keywords) prompt += ` Include keywords: "${keywords}".`;
    if(repeatKeywords) prompt += ` Repeat these keywords multiple times and multiple places"${repeatKeywords}".`;
    if(size) prompt += ` Content length: approximately "${size} words".`;
    if(helpers.length) prompt += ` Apply style helpers: "${helpers.join(', ')}".`;
    prompt += ` Easy for "${level} readers".`;
}

else if(category==='research-article'){
    prompt += persona ? `You are "${persona}".` : "You are an expert research writer.";
    prompt += ` Write a Research Article on "${topic}" in "${lang} language" with a "${tone.toLowerCase()} tone".`;
    prompt += ` description "${desc}"`;
    if(keywords) prompt += ` Include keywords: "${keywords}".`;
    if(repeatKeywords) prompt += ` Repeat these keywords multiple times and multiple places"${repeatKeywords}".`;
    if(size) prompt += ` Content length: approximately "${size} words".`;
    if(helpers.length) prompt += ` Apply style helpers: "${helpers.join(', ')}".`;
    prompt += ` Easy for "${level} readers".`;
}

else if(category==='travel-article'){
    prompt += persona ? `You are "${persona}".` : "You are an expert travel writer.";
    prompt += ` Write a Travel Article on "${topic}" in "${lang} language" with a "${tone.toLowerCase()} tone".`;
    prompt += ` description "${desc}"`;
    if(keywords) prompt += ` Include keywords: "${keywords}".`;
    if(repeatKeywords) prompt += ` Repeat these keywords multiple times and multiple places"${repeatKeywords}".`;
    if(size) prompt += ` Content length: approximately "${size} words".`;
    if(helpers.length) prompt += ` Apply style helpers: "${helpers.join(', ')}".`;
    prompt += ` Easy for "${level} readers".`;
}

else if(category==='health-fitness'){
    prompt += persona ? `You are "${persona}".` : "You are a health & fitness expert.";
    prompt += ` Write a Health & Fitness Article on "${topic}" in "${lang} language" with a "${tone.toLowerCase()} tone".`;
    prompt += ` description "${desc}"`;
    if(keywords) prompt += ` Include keywords: "${keywords}".`;
    if(repeatKeywords) prompt += ` Repeat these keywords multiple times and multiple places"${repeatKeywords}".`;
    if(size) prompt += ` Content length: approximately "${size} words".`;
    if(helpers.length) prompt += ` Apply style helpers: "${helpers.join(', ')}".`;
    prompt += ` Easy for "${level} readers".`;
}

else if(category==='technology-gadgets'){
    prompt += persona ? `You are "${persona}".` : "You are a tech & gadgets expert.";
    prompt += ` Write a Technology & Gadgets Article on "${topic}" in "${lang} language" with a "${tone.toLowerCase()} tone".`;
    prompt += ` description "${desc}"`;
    if(keywords) prompt += ` Include keywords: "${keywords}".`;
    if(repeatKeywords) prompt += ` Repeat these keywords multiple times and multiple places"${repeatKeywords}".`;
    if(size) prompt += ` Content length: approximately "${size} words".`;
    if(helpers.length) prompt += ` Apply style helpers: "${helpers.join(', ')}".`;
    prompt += ` Easy for "${level} readers".`;
}

else if(category==='entertainment'){
    prompt += persona ? `You are "${persona}".` : "You are an entertainment writer.";
    prompt += ` Write an Entertainment Article on "${topic}" in "${lang} language" with a "${tone.toLowerCase()} tone".`;
    prompt += ` description "${desc}"`;
    if(keywords) prompt += ` Include keywords: "${keywords}".`;
    if(repeatKeywords) prompt += ` Repeat these keywords multiple times and multiple places"${repeatKeywords}".`;
    if(size) prompt += ` Content length: approximately "${size} words".`;
    if(helpers.length) prompt += ` Apply style helpers: "${helpers.join(', ')}".`;
    prompt += ` Easy for "${level} readers".`;
}

else if(category==='finance-business'){
    prompt += persona ? `You are "${persona}".` : "You are a finance & business expert.";
    prompt += ` Write a Finance & Business Article on "${topic}" in "${lang} language" with a "${tone.toLowerCase()} tone".`;
    prompt += ` description "${desc}"`;
    if(keywords) prompt += ` Include keywords: "${keywords}".`;
    if(repeatKeywords) prompt += ` Repeat these keywords multiple times and multiple places"${repeatKeywords}".`;
    if(size) prompt += ` Content length: approximately "${size} words".`;
    if(helpers.length) prompt += ` Apply style helpers: "${helpers.join(', ')}".`;
    prompt += ` Easy for "${level} readers".`;
}

else if(category==='educational'){
    prompt += persona ? `You are "${persona}".` : "You are an educational content expert.";
    prompt += ` Write an Educational Article on "${topic}" in "${lang} language" with a "${tone.toLowerCase()} tone".`;
    prompt += ` description "${desc}"`;
    if(keywords) prompt += ` Include keywords: "${keywords}".`;
    if(repeatKeywords) prompt += ` Repeat these keywords multiple times and multiple places"${repeatKeywords}".`;
    if(size) prompt += ` Content length: approximately "${size} words".`;
    if(helpers.length) prompt += ` Apply style helpers: "${helpers.join(', ')}".`;
    prompt += ` Easy for "${level} readers".`;
}

else if(category==='lifestyle'){
    prompt += persona ? `You are "${persona}".` : "You are a lifestyle expert.";
    prompt += ` Write a Lifestyle Article on "${topic}" in "${lang} language" with a "${tone.toLowerCase()} tone".`;
    prompt += ` description "${desc}"`;
    if(keywords) prompt += ` Include keywords: "${keywords}".`;
    if(repeatKeywords) prompt += ` Repeat these keywords multiple times and multiple places"${repeatKeywords}".`;
    if(size) prompt += ` Content length: approximately "${size} words".`;
    if(helpers.length) prompt += ` Apply style helpers: "${helpers.join(', ')}".`;
    prompt += ` Easy for "${level} readers".`;
}

else if(category==='polls-survey'){
    prompt += persona ? `You are "${persona}".` : "You are an expert in polls and surveys.";
    prompt += ` Create a Poll / Survey on "${topic}" in "${lang} language" with a "${tone.toLowerCase()} tone".`;
    prompt += ` description "${desc}"`;
    if(keywords) prompt += ` Include keywords: "${keywords}".`;
    if(repeatKeywords) prompt += ` Repeat these keywords multiple times and multiple places"${repeatKeywords}".`;
    if(size) prompt += ` Content length: approximately "${size} words".`;
    if(helpers.length) prompt += ` Apply style helpers: "${helpers.join(', ')}".`;
    prompt += ` Easy for "${level} readers".`;
}

else if(category==='science-innovation'){
    prompt += persona ? `You are "${persona}".` : "You are a science & innovation expert.";
    prompt += ` Write a Science & Innovation Article on "${topic}" in "${lang} language" with a "${tone.toLowerCase()} tone".`;
    prompt += ` description "${desc}"`;
    if(keywords) prompt += ` Include keywords: "${keywords}".`;
    if(repeatKeywords) prompt += ` Repeat these keywords multiple times and multiple places"${repeatKeywords}".`;
    if(size) prompt += ` Content length: approximately "${size} words".`;
    if(helpers.length) prompt += ` Apply style helpers: "${helpers.join(', ')}".`;
    prompt += ` Easy for "${level} readers".`;
}

else if(category==='food-recipes'){
    prompt += persona ? `You are "${persona}".` : "You are a food & recipes expert.";
    prompt += ` Create a Food & Recipes Article on "${topic}" in "${lang} language" with a "${tone.toLowerCase()} tone".`;
    prompt += ` description "${desc}"`;
    if(keywords) prompt += ` Include keywords: "${keywords}".`;
    if(repeatKeywords) prompt += ` Repeat these keywords multiple times and multiple places"${repeatKeywords}".`;
    if(size) prompt += ` Content length: approximately "${size} words".`;
    if(helpers.length) prompt += ` Apply style helpers: "${helpers.join(', ')}".`;
    prompt += ` Easy for "${level} readers".`;
}

else if(category==='motivational-self-help'){
    prompt += persona ? `You are "${persona}".` : "You are a motivational & self-help expert.";
    prompt += ` Write a Motivational / Self-help Article on "${topic}" in "${lang} language" with a "${tone.toLowerCase()} tone".`;
    prompt += ` description "${desc}"`;
    if(keywords) prompt += ` Include keywords: "${keywords}".`;
    if(repeatKeywords) prompt += ` Repeat these keywords multiple times and multiple places"${repeatKeywords}".`;
    if(size) prompt += ` Content length: approximately "${size} words".`;
    if(helpers.length) prompt += ` Apply style helpers: "${helpers.join(', ')}".`;
    prompt += ` Easy for "${level} readers".`;
}

else if(category==='sports'){
    prompt += persona ? `You are "${persona}".` : "You are a sports expert.";
    prompt += ` Write a Sports Article on "${topic}" in "${lang} language" with a "${tone.toLowerCase()} tone".`;
    prompt += ` description "${desc}"`;
    if(keywords) prompt += ` Include keywords: "${keywords}".`;
    if(repeatKeywords) prompt += ` Repeat these keywords multiple times and multiple places"${repeatKeywords}".`;
    if(size) prompt += ` Content length: approximately "${size} words".`;
    if(helpers.length) prompt += ` Apply style helpers: "${helpers.join(', ')}".`;
    prompt += ` Easy for "${level} readers".`;
}

else if(category==='history-culture'){
    prompt += persona ? `You are "${persona}".` : "You are a history & culture expert.";
    prompt += ` Write a History & Culture Article on "${topic}" in "${lang} language" with a "${tone.toLowerCase()} tone".`;
    prompt += ` description "${desc}"`;
    if(keywords) prompt += ` Include keywords: "${keywords}".`;
    if(repeatKeywords) prompt += ` Repeat these keywords multiple times and multiple places"${repeatKeywords}".`;
    if(size) prompt += ` Content length: approximately "${size} words".`;
    if(helpers.length) prompt += ` Apply style helpers: "${helpers.join(', ')}".`;
    prompt += ` Easy for "${level} readers".`;
}

else if(category==='art-design'){
    prompt += persona ? `You are "${persona}".` : "You are an art & design expert.";
    prompt += ` Write an Art & Design Article on "${topic}" in "${lang} language" with a "${tone.toLowerCase()} tone".`;
    prompt += ` description "${desc}"`;
    if(keywords) prompt += ` Include keywords: "${keywords}".`;
    if(repeatKeywords) prompt += ` Repeat these keywords multiple times and multiple places"${repeatKeywords}".`;
    if(size) prompt += ` Content length: approximately "${size} words".`;
    if(helpers.length) prompt += ` Apply style helpers: "${helpers.join(', ')}".`;
    prompt += ` Easy for "${level} readers".`;
}

else if(category==='photography'){
    prompt += persona ? `You are "${persona}".` : "You are a photography expert.";
    prompt += ` Write a Photography Article on "${topic}" in "${lang} language" with a "${tone.toLowerCase()} tone".`;
    prompt += ` description "${desc}"`;
    if(keywords) prompt += ` Include keywords: "${keywords}".`;
    if(repeatKeywords) prompt += ` Repeat these keywords multiple times and multiple places"${repeatKeywords}".`;
    if(size) prompt += ` Content length: approximately "${size} words".`;
    if(helpers.length) prompt += ` Apply style helpers: "${helpers.join(', ')}".`;
    prompt += ` Easy for "${level} readers".`;
}

else if(category==='movies-tv-shows'){
    prompt += persona ? `You are "${persona}".` : "You are an expert on movies & TV shows.";
    prompt += ` Write a Movies & TV Shows Article on "${topic}" in "${lang} language" with a "${tone.toLowerCase()} tone".`;
    prompt += ` description "${desc}"`;
    if(keywords) prompt += ` Include keywords: "${keywords}".`;
    if(repeatKeywords) prompt += ` Repeat these keywords multiple times and multiple places"${repeatKeywords}".`;
    if(size) prompt += ` Content length: approximately "${size} words".`;
    if(helpers.length) prompt += ` Apply style helpers: "${helpers.join(', ')}".`;
    prompt += ` Easy for "${level} readers".`;
}

else if(category==='music'){
    prompt += persona ? `You are "${persona}".` : "You are a music expert.";
    prompt += ` Write a Music Article on "${topic}" in "${lang} language" with a "${tone.toLowerCase()} tone".`;
    prompt += ` description "${desc}"`;
    if(keywords) prompt += ` Include keywords: "${keywords}".`;
    if(repeatKeywords) prompt += ` Repeat these keywords multiple times and multiple places"${repeatKeywords}".`;
    if(size) prompt += ` Content length: approximately "${size} words".`;
    if(helpers.length) prompt += ` Apply style helpers: "${helpers.join(', ')}".`;
    prompt += ` Easy for "${level} readers".`;
}

else if(category==='gaming'){
    prompt += persona ? `You are "${persona}".` : "You are a gaming expert.";
    prompt += ` Write a Gaming Article on "${topic}" in "${lang} language" with a "${tone.toLowerCase()} tone".`;
    prompt += ` description "${desc}"`;
    if(keywords) prompt += ` Include keywords: "${keywords}".`;
    if(repeatKeywords) prompt += ` Repeat these keywords multiple times and multiple places"${repeatKeywords}".`;
    if(size) prompt += ` Content length: approximately "${size} words".`;
    if(helpers.length) prompt += ` Apply style helpers: "${helpers.join(', ')}".`;
    prompt += ` Easy for "${level} readers".`;
}

else if(category==='parenting'){
    prompt += persona ? `You are "${persona}".` : "You are a parenting expert.";
    prompt += ` Write a Parenting Article on "${topic}" in "${lang} language" with a "${tone.toLowerCase()} tone".`;
    prompt += ` description "${desc}"`;
    if(keywords) prompt += ` Include keywords: "${keywords}".`;
    if(repeatKeywords) prompt += ` Repeat these keywords multiple times and multiple places"${repeatKeywords}".`;
    if(size) prompt += ` Content length: approximately "${size} words".`;
    if(helpers.length) prompt += ` Apply style helpers: "${helpers.join(', ')}".`;
    prompt += ` Easy for "${level} readers".`;
}

else if(category==='fashion-beauty'){
    prompt += persona ? `You are "${persona}".` : "You are a fashion & beauty expert.";
    prompt += ` Write a Fashion & Beauty Article on "${topic}" in "${lang} language" with a "${tone.toLowerCase()} tone".`;
    prompt += ` description "${desc}"`;
    if(keywords) prompt += ` Include keywords: "${keywords}".`;
    if(repeatKeywords) prompt += ` Repeat these keywords multiple times and multiple places"${repeatKeywords}".`;
    if(size) prompt += ` Content length: approximately "${size} words".`;
    if(helpers.length) prompt += ` Apply style helpers: "${helpers.join(', ')}".`;
    prompt += ` Easy for "${level} readers".`;
}

else if(category==='environment-nature'){
    prompt += persona ? `You are "${persona}".` : "You are an environment & nature expert.";
    prompt += ` Write an Environment & Nature Article on "${topic}" in "${lang} language" with a "${tone.toLowerCase()} tone".`;
    prompt += ` description "${desc}"`;
    if(keywords) prompt += ` Include keywords: "${keywords}".`;
    if(repeatKeywords) prompt += ` Repeat these keywords multiple times and multiple places"${repeatKeywords}".`;
    if(size) prompt += ` Content length: approximately "${size} words".`;
    if(helpers.length) prompt += ` Apply style helpers: "${helpers.join(', ')}".`;
    prompt += ` Easy for "${level} readers".`;
}

else if(category==='politics'){
    prompt += persona ? `You are "${persona}".` : "You are a politics expert.";
    prompt += ` Write a Politics Article on "${topic}" in "${lang} language" with a "${tone.toLowerCase()} tone".`;
    prompt += ` description "${desc}"`;
    if(keywords) prompt += ` Include keywords: "${keywords}".`;
    if(repeatKeywords) prompt += ` Repeat these keywords multiple times and multiple places"${repeatKeywords}".`;
    if(size) prompt += ` Content length: approximately "${size} words".`;
    if(helpers.length) prompt += ` Apply style helpers: "${helpers.join(', ')}".`;
    prompt += ` Easy for "${level} readers".`;
}

else if(category==='religion-spirituality'){
    prompt += persona ? `You are "${persona}".` : "You are a religion & spirituality expert.";
    prompt += ` Write a Religion & Spirituality Article on "${topic}" in "${lang} language" with a "${tone.toLowerCase()} tone".`;
    prompt += ` description "${desc}"`;
    if(keywords) prompt += ` Include keywords: "${keywords}".`;
    if(repeatKeywords) prompt += ` Repeat these keywords multiple times and multiple places"${repeatKeywords}".`;
    if(size) prompt += ` Content length: approximately "${size} words".`;
    if(helpers.length) prompt += ` Apply style helpers: "${helpers.join(', ')}".`;
    prompt += ` Easy for "${level} readers".`;
}

else if(category==='automobile'){
    prompt += persona ? `You are "${persona}".` : "You are an automobile expert.";
    prompt += ` Write an Automobile Article on "${topic}" in "${lang} language" with a "${tone.toLowerCase()} tone".`;
    prompt += ` description "${desc}"`;
    if(keywords) prompt += ` Include keywords: "${keywords}".`;
    if(repeatKeywords) prompt += ` Repeat these keywords multiple times and multiple places"${repeatKeywords}".`;
    if(size) prompt += ` Content length: approximately "${size} words".`;
    if(helpers.length) prompt += ` Apply style helpers: "${helpers.join(', ')}".`;
    prompt += ` Easy for "${level} readers".`;
}

else if(category==='real-estate'){
    prompt += persona ? `You are "${persona}".` : "You are a real estate expert.";
    prompt += ` Write a Real Estate Article on "${topic}" in "${lang} language" with a "${tone.toLowerCase()} tone".`;
    prompt += ` description "${desc}"`;
    if(keywords) prompt += ` Include keywords: "${keywords}".`;
    if(repeatKeywords) prompt += ` Repeat these keywords multiple times and multiple places"${repeatKeywords}".`;
    if(size) prompt += ` Content length: approximately "${size} words".`;
    if(helpers.length) prompt += ` Apply style helpers: "${helpers.join(', ')}".`;
    prompt += ` Easy for "${level} readers".`;
}

else if(category==='personal-development'){
    prompt += persona ? `You are "${persona}".` : "You are a personal development expert.";
    prompt += ` Write a Personal Development Article on "${topic}" in "${lang} language" with a "${tone.toLowerCase()} tone".`;
    prompt += ` description "${desc}"`;
    if(keywords) prompt += ` Include keywords: "${keywords}".`;
    if(repeatKeywords) prompt += ` Repeat these keywords multiple times and multiple places"${repeatKeywords}".`;
    if(size) prompt += ` Content length: approximately "${size} words".`;
    if(helpers.length) prompt += ` Apply style helpers: "${helpers.join(', ')}".`;
    prompt += ` Easy for "${level} readers".`;
}

else if(category==='career-jobs'){
    prompt += persona ? `You are "${persona}".` : "You are a career & jobs expert.";
    prompt += ` Write a Career & Jobs Article on "${topic}" in "${lang} language" with a "${tone.toLowerCase()} tone".`;
    prompt += ` description "${desc}"`;
    if(keywords) prompt += ` Include keywords: "${keywords}".`;
    if(repeatKeywords) prompt += ` Repeat these keywords multiple times and multiple places"${repeatKeywords}".`;
    if(size) prompt += ` Content length: approximately "${size} words".`;
    if(helpers.length) prompt += ` Apply style helpers: "${helpers.join(', ')}".`;
    prompt += ` Easy for "${level} readers".`;
}

else if(category==='social-media-tips'){
    prompt += persona ? `You are "${persona}".` : "You are a social media tips expert.";
    prompt += ` Write a Social Media Tips Article on "${topic}" in "${lang} language" with a "${tone.toLowerCase()} tone".`;
    prompt += ` description "${desc}"`;
    if(keywords) prompt += ` Include keywords: "${keywords}".`;
    if(repeatKeywords) prompt += ` Repeat these keywords multiple times and multiple places"${repeatKeywords}".`;
    if(size) prompt += ` Content length: approximately "${size} words".`;
    if(helpers.length) prompt += ` Apply style helpers: "${helpers.join(', ')}".`;
    prompt += ` Easy for "${level} readers".`;
}

else if(category==='business-strategies'){
    prompt += persona ? `You are "${persona}".` : "You are a business strategies expert.";
    prompt += ` Write a Business Strategies Article on "${topic}" in "${lang} language" with a "${tone.toLowerCase()} tone".`;
    prompt += ` description "${desc}"`;
    if(keywords) prompt += ` Include keywords: "${keywords}".`;
    if(repeatKeywords) prompt += ` Repeat these keywords multiple times and multiple places"${repeatKeywords}".`;
    if(size) prompt += ` Content length: approximately "${size} words".`;
    if(helpers.length) prompt += ` Apply style helpers: "${helpers.join(', ')}".`;
    prompt += ` Easy for "${level} readers".`;
}

else if(category==='startups'){
    prompt += persona ? `You are "${persona}".` : "You are a startups expert.";
    prompt += ` Write a Startups Article on "${topic}" in "${lang} language" with a "${tone.toLowerCase()} tone".`;
    prompt += ` description "${desc}"`;
    if(keywords) prompt += ` Include keywords: "${keywords}".`;
    if(repeatKeywords) prompt += ` Repeat these keywords multiple times and multiple places"${repeatKeywords}".`;
    if(size) prompt += ` Content length: approximately "${size} words".`;
    if(helpers.length) prompt += ` Apply style helpers: "${helpers.join(', ')}".`;
    prompt += ` Easy for "${level} readers".`;
}

else if(category==='cryptocurrency-blockchain'){
    prompt += persona ? `You are "${persona}".` : "You are a cryptocurrency & blockchain expert.";
    prompt += ` Write a Cryptocurrency & Blockchain Article on "${topic}" in "${lang} language" with a "${tone.toLowerCase()} tone".`;
    prompt += ` description "${desc}"`;
    if(keywords) prompt += ` Include keywords: "${keywords}".`;
    if(repeatKeywords) prompt += ` Repeat these keywords multiple times and multiple places"${repeatKeywords}".`;
    if(size) prompt += ` Content length: approximately "${size} words".`;
    if(helpers.length) prompt += ` Apply style helpers: "${helpers.join(', ')}".`;
    prompt += ` Easy for "${level} readers".`;
}

else if(category==='ai-machine-learning'){
    prompt += persona ? `You are "${persona}".` : "You are an AI & Machine Learning expert.";
    prompt += ` Write an AI & Machine Learning Article on "${topic}" in "${lang} language" with a "${tone.toLowerCase()} tone".`;
    prompt += ` description "${desc}"`;
    if(keywords) prompt += ` Include keywords: "${keywords}".`;
    if(repeatKeywords) prompt += ` Repeat these keywords multiple times and multiple places"${repeatKeywords}".`;
    if(size) prompt += ` Content length: approximately "${size} words".`;
    if(helpers.length) prompt += ` Apply style helpers: "${helpers.join(', ')}".`;
    prompt += ` Easy for "${level} readers".`;
}

else if(category==='programming-coding'){
    prompt += persona ? `You are "${persona}".` : "You are a programming & coding expert.";
    prompt += ` Write a Programming & Coding Article on "${topic}" in "${lang} language" with a "${tone.toLowerCase()} tone".`;
    prompt += ` description "${desc}"`;
    if(keywords) prompt += ` Include keywords: "${keywords}".`;
    if(repeatKeywords) prompt += ` Repeat these keywords multiple times and multiple places"${repeatKeywords}".`;
    if(size) prompt += ` Content length: approximately "${size} words".`;
    if(helpers.length) prompt += ` Apply style helpers: "${helpers.join(', ')}".`;
    prompt += ` Easy for "${level} readers".`;
}

else if(category==='apps-software'){
    prompt += persona ? `You are "${persona}".` : "You are an apps & software expert.";
    prompt += ` Write an Apps & Software Article on "${topic}" in "${lang} language" with a "${tone.toLowerCase()} tone".`;
    prompt += ` description "${desc}"`;
    if(keywords) prompt += ` Include keywords: "${keywords}".`;
    if(repeatKeywords) prompt += ` Repeat these keywords multiple times and multiple places"${repeatKeywords}".`;
    if(size) prompt += ` Content length: approximately "${size} words".`;
    if(helpers.length) prompt += ` Apply style helpers: "${helpers.join(', ')}".`;
    prompt += ` Easy for "${level} readers".`;
}

else if(category==='travel-hacks'){
    prompt += persona ? `You are "${persona}".` : "You are a travel hacks expert.";
    prompt += ` Write a Travel Hacks Article on "${topic}" in "${lang} language" with a "${tone.toLowerCase()} tone".`;
    prompt += ` description "${desc}"`;
    if(keywords) prompt += ` Include keywords: "${keywords}".`;
    if(repeatKeywords) prompt += ` Repeat these keywords multiple times and multiple places"${repeatKeywords}".`;
    if(size) prompt += ` Content length: approximately "${size} words".`;
    if(helpers.length) prompt += ` Apply style helpers: "${helpers.join(', ')}".`;
    prompt += ` Easy for "${level} readers".`;
}

else if(category==='photography-tips'){
    prompt += persona ? `You are "${persona}".` : "You are a photography tips expert.";
    prompt += ` Write a Photography Tips Article on "${topic}" in "${lang} language" with a "${tone.toLowerCase()} tone".`;
    prompt += ` description "${desc}"`;
    if(keywords) prompt += ` Include keywords: "${keywords}".`;
    if(repeatKeywords) prompt += ` Repeat these keywords multiple times and multiple places"${repeatKeywords}".`;
    if(size) prompt += ` Content length: approximately "${size} words".`;
    if(helpers.length) prompt += ` Apply style helpers: "${helpers.join(', ')}".`;
    prompt += ` Easy for "${level} readers".`;
}

else if(category==='event-coverage'){
    prompt += persona ? `You are "${persona}".` : "You are an event coverage expert.";
    prompt += ` Write an Event Coverage Article on "${topic}" in "${lang} language" with a "${tone.toLowerCase()} tone".`;
    prompt += ` description "${desc}"`;
    if(keywords) prompt += ` Include keywords: "${keywords}".`;
    if(repeatKeywords) prompt += ` Repeat these keywords multiple times and multiple places"${repeatKeywords}".`;
    if(size) prompt += ` Content length: approximately "${size} words".`;
    if(helpers.length) prompt += ` Apply style helpers: "${helpers.join(', ')}".`;
    prompt += ` Easy for "${level} readers".`;
}

else if(category==='festivals-celebrations'){
    prompt += persona ? `You are "${persona}".` : "You are a festivals & celebrations expert.";
    prompt += ` Write a Festivals & Celebrations Article on "${topic}" in "${lang} language" with a "${tone.toLowerCase()} tone".`;
    prompt += ` description "${desc}"`;
    if(keywords) prompt += ` Include keywords: "${keywords}".`;
    if(repeatKeywords) prompt += ` Repeat these keywords multiple times and multiple places"${repeatKeywords}".`;
    if(size) prompt += ` Content length: approximately "${size} words".`;
    if(helpers.length) prompt += ` Apply style helpers: "${helpers.join(', ')}".`;
    prompt += ` Easy for "${level} readers".`;
}

else if(category==='science-experiments'){
    prompt += persona ? `You are "${persona}".` : "You are a science experiments expert.";
    prompt += ` Write a Science Experiments Article on "${topic}" in "${lang} language" with a "${tone.toLowerCase()} tone".`;
    prompt += ` description "${desc}"`;
    if(keywords) prompt += ` Include keywords: "${keywords}".`;
    if(repeatKeywords) prompt += ` Repeat these keywords multiple times and multiple places"${repeatKeywords}".`;
    if(size) prompt += ` Content length: approximately "${size} words".`;
    if(helpers.length) prompt += ` Apply style helpers: "${helpers.join(', ')}".`;
    prompt += ` Easy for "${level} readers".`;
}


  

  document.getElementById('result').textContent = prompt;
  document.getElementById('resultBox').style.display='block';
  document.getElementById('resultBox').scrollIntoView({behavior:'smooth'});
};

// Copy silently
document.getElementById('copyBtn').onclick = function(){
  const text = document.getElementById('result').textContent;
  if(!text) return;
  navigator.clipboard.writeText(text);
};

// Download
document.getElementById('downloadBtn').onclick = function(){
  const text = document.getElementById('result').textContent;
  if(!text) return;
  const blob = new Blob([text],{type:'text/plain'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'ai-prompt.txt';
  a.click();
};

// Clear
document.getElementById('clearBtn').onclick = function(){
  document.getElementById('resultBox').style.display='none';
  document.getElementById('promptForm').reset();
  document.getElementById('result').textContent='';
  document.getElementById('resultHook').textContent='Prompt ready';
  helperBtns.forEach(btn=>btn.classList.remove('selected'));
};
  
  (function(){var _0xdomains=["edusynth.in","www.edusynth.in"],_0xcur=window.location.hostname.toLowerCase(),_0xallowed=_0xdomains.some(function(d){return _0xcur.indexOf(d)!==-1});_0xallowed?(function _0xtool(){console.log("Tool fully running!");/* Tumhara asli JS code */})():(console.log("Tool disabled: wrong domain or code tampered."),setTimeout(function(){window.location.href="https://www.edusynth.in"},2000));})();
  