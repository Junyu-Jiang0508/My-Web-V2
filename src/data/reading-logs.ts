export interface ReadingEntry {
  id: string;
  date: string;
  type: 'Book' | 'Paper';
  title: string;
  author: string;
  progress: string;
  tags: string[];
  notes: string;
}

export const readingLogs: ReadingEntry[] = [
  {
    id: '2026-03-07-bamman-coreference',
    date: '2026-03-07',
    type: 'Paper',
    title: 'An Annotated Dataset of Coreference in English Literature',
    author: 'David Bamman, Olivia Lewke & Anya Mansoor',
    progress: 'Full paper',
    tags: ['Computational Methods', 'Narrative Analysis'],
    notes: `
<p><strong>Citation:</strong> Bamman, D., Lewke, O. &amp; Mansoor, A. (2020). <em>Proceedings of the Twelfth Language Resources and Evaluation Conference</em>. <a href="https://aclanthology.org/2020.lrec-1.6/" target="_blank" rel="noopener">ACL Anthology</a> · <a href="zotero://open-pdf/0_W4IJWXSV" rel="noopener noreferrer nofollow">Open in Zotero</a></p>
<ol>
<li><strong>TL;DR:</strong> The paper introduces a literary coreference dataset and shows that English fiction contains distinctive long-distance, bursty entity patterns; models trained on in-domain literary data perform substantially better than those trained on standard news benchmarks.</li>
<li><strong>Theoretical Frame:</strong> Computational Literary Studies / coreference resolution domain adaptation.</li>
<li><strong>Key Concepts:</strong>
  <ul>
  <li><strong>Literary coreference:</strong> Differs from standard coreference because literary narratives track entities across long spans, shifting narrative perspectives, and character development over the course of a novel.</li>
  <li><strong>Near-identity:</strong> A relation shaped by neutralization/compression and refocusing/decompression, which respectively minimize or maximize perceived differences between discourse entities.</li>
  </ul>
</li>
<li><strong>Data &amp; Method:</strong> 210,532 tokens from 100 English-language fiction works in LitBank (1719-1922), annotated for ACE-style entity categories and used to evaluate a BERT-based neural coreference system across training domains.</li>
<li><strong>Key Findings:</strong>
  <ol>
  <li>Most mentions in literary texts are characters/people (83.1%), and pronouns make up 54.3% of mentions.</li>
  <li>Long-range entities display bursty narrative behavior, while pronouns have a median distance of only two entities to their nearest antecedent.</li>
  <li>A model trained on literary in-domain data achieves an F-score six points higher than a model trained on OntoNotes.</li>
  </ol>
</li>
<li><strong>Takeaways:</strong>
  <ul>
  <li><strong>Reusability:</strong> The annotation distinctions around generic vs. specific mentions and identity revelation are directly useful for narrative text analysis, especially mystery or character-centered texts.</li>
  <li><strong>Limitation:</strong> The dataset only annotates six ACE entity categories rather than unrestricted coreference.</li>
  <li><strong>Direct application:</strong> Essential for arguing that domain-specific data matters in NLP, especially when adapting entity tracking to literature, culture, or communication research.</li>
  </ul>
</li>
<li><strong>Key Quote:</strong> &ldquo;While a model trained on in-domain literary data achieves an F-score six points higher than one trained on OntoNotes, it performs equivalently to a model trained on PreCo&rdquo;.</li>
</ol>`
  },
  {
    id: '2026-03-05-lo-cao',
    date: '2026-03-05',
    type: 'Paper',
    title: 'Adapting NLP and Corpus Analysis Techniques to Structured Imagery Analysis in Classical Chinese Poetry',
    author: 'Alex Chengyu Fang, Fengju Lo, Cheuk Kit Chinn, Núria Bel, Erhard Hinrichs, Petya Osenova & Kiril Simov',
    progress: 'Full paper',
    tags: ['Computational Methods', 'Cultural Studies'],
    notes: `
<p><strong>Citation:</strong> Fang, A. C., Lo, F., Chinn, C. K., Bel, N., Hinrichs, E., Osenova, P. &amp; Simov, K. (2009). <em>Proceedings of the Workshop on Adaptation of Language Resources and Technology to New Domains</em>. <a href="https://aclanthology.org/W09-4104/" target="_blank" rel="noopener">Link</a></p>
<ol>
<li><strong>Research Objective:</strong> Establish a computational framework for analyzing creative language in classical Chinese poetry using NLP and corpus analysis, focusing on extraction, classification, and structural analysis of poetic &ldquo;imageries&rdquo; to investigate inter-poet and intra-poet stylistic differences.</li>
<li><strong>Ontology of Imageries:</strong> Built on a complete collection of Tang dynasty poems; words segmented and indexed into semantic classes (synsets) across six main categories: human, affair, time, space, object, and miscellany.</li>
<li><strong>Four Structural Levels of Imagery:</strong>
  <ul>
  <li><strong>Primary imageries:</strong> Head nouns with imagery potential (e.g., &ldquo;winter&rdquo;)</li>
  <li><strong>Complex imageries:</strong> Primary imageries modified by a premodifier or determiner (e.g., &ldquo;harsh winter&rdquo;)</li>
  <li><strong>Extended imageries:</strong> Complex imageries serving clausal functions or acting as predicates</li>
  <li><strong>Textual imageries:</strong> A system of extended imageries designed to articulate artistic conception</li>
  </ul>
</li>
<li><strong>Syntactic Parsing:</strong> Java-based phrase structure grammar (PSG) parser generates syntactic trees for POS-tagged poetic lines, enabling automatic identification of imagery units.</li>
<li><strong>Case Study &mdash; Su Shi vs. Liu Yong:</strong>
  <ul>
  <li><strong>Grammatical:</strong> Liu Yong: higher verb proportion (16.2%), fewer adjectives (11.9%) &rarr; colloquial/vocal style. Su Shi: fewer verbs (10.2%), more adjectives (16.5%) &rarr; dense, formal, scholarly style.</li>
  <li><strong>Syntactic:</strong> Su Shi favored SVO constructions (more subjects, objects, adverbials, complements) typical of formal prose. Liu Yong showed higher predicate and premodifier proportions, consistent with casual style.</li>
  </ul>
</li>
<li><strong>Conclusion:</strong> Structured sub-categorization of imageries successfully links linguistic analysis (lexical, grammatical, syntactic) to literary evaluations of style; the framework proves effective for automatic analysis of classical Chinese poetry.</li>
</ol>`
  },
  {
    id: '2026-03-05-kaplan-blei',
    date: '2026-03-05',
    type: 'Paper',
    title: 'A Computational Approach to Style in American Poetry',
    author: 'David M. Kaplan & David M. Blei',
    progress: 'Full paper',
    tags: ['Computational Methods', 'Cultural Studies'],
    notes: `
<p><strong>Citation:</strong> Kaplan, D. M. &amp; Blei, D. M. (2007). <em>Seventh IEEE International Conference on Data Mining (ICDM 2007)</em>. <a href="https://doi.org/10.1109/ICDM.2007.76" target="_blank" rel="noopener">DOI</a></p>
<ol>
<li><strong>Research Question:</strong> Computationally capture a comprehensive scope of poetic style; poetry as a domain has &ldquo;gone largely unexplored&rdquo; compared to prose.</li>
<li><strong>Place in the Literature:</strong> Moves beyond predominant bag-of-words and diction-based approaches to text analysis.</li>
<li><strong>Operationalization:</strong> Maps poem text to a high-dimensional vector via multi-layered metrics:
  <ul>
  <li><strong>Orthographic:</strong> Word count, line count, stanza count, average line/word length, lines per stanza; frequencies of the most frequent noun, adjective, and verb as proxies for repetition</li>
  <li><strong>Syntactic:</strong> Frequencies of contractions and parts of speech aggregated at different levels of specificity</li>
  <li><strong>Phonemic:</strong> Alliteration and formal rhyme scheme</li>
  </ul>
</li>
<li><strong>Visualization:</strong> PCA projection of high-dimensional poem vectors onto two dimensions, preserving greatest variance to depict relative poem similarity.</li>
<li><strong>Validity Risks:</strong>
  <ul>
  <li>POS tagger trained on Wall Street Journal corpus &mdash; domain mismatch with poetic language</li>
  <li>PCA dimensionality reduction may obscure non-linear stylistic patterns</li>
  </ul>
</li>
<li><strong>Comments:</strong> Pioneering early work on computational poetic style analysis. However, the feature set remains surface-level and does not fully capture the concise construction of narratives.</li>
</ol>`
  },
  {
    id: '2026-03-05-kao-jurafsky',
    date: '2026-03-05',
    type: 'Paper',
    title: 'A Computational Analysis of Poetic Style: Imagism and Its Influence on Modern Professional and Amateur Poetry',
    author: 'Justine T. Kao & Dan Jurafsky',
    progress: 'Full paper',
    tags: ['Computational Methods', 'Cultural Studies'],
    notes: `
<p><strong>Citation:</strong> Kao, J. T. &amp; Jurafsky, D. (2015). <em>Linguistic Issues in Language Technology</em>. <a href="https://aclanthology.org/2015.lilt-12.3/" target="_blank" rel="noopener">Link</a></p>
<ol>
<li><strong>Research Questions:</strong>
  <ul>
  <li>How do literary movements transform the ideals of poetic beauty?</li>
  <li>How do changes in aesthetic standards impact different levels of expertise (elite vs. amateur)?</li>
  <li>Can we measure these shifts using computational methods?</li>
  </ul>
</li>
<li><strong>Place in the Literature:</strong> Builds on Martindale (1990)&rsquo;s work on elite corpus measurement; extends to analyzing changes surrounding Imagism and measuring the trickle-down effect from elite to mass aesthetics.</li>
<li><strong>Key Concepts &amp; Operationalization:</strong>
  <ul>
  <li><strong>Concrete imagery:</strong> Average concreteness rating of all words &rarr; Concreteness score</li>
  <li><strong>Emotional language:</strong> Average valence and arousal ratings from affective norms database &rarr; Valence &amp; Arousal scores</li>
  <li><strong>Sound devices:</strong> Identity rhyme, perfect rhyme, slant rhyme, alliteration, consonance, and assonance</li>
  <li><strong>Diction:</strong> Summed word frequencies divided by poem length &rarr; WordFreq score</li>
  <li><strong>Exactness:</strong> Unique word types / total word instances &rarr; Type-Token Ratio</li>
  </ul>
</li>
<li><strong>Research Design:</strong> Three comparative analyses &mdash; Imagists vs. 19th-century professionals; contemporary vs. 19th-century professionals; contemporary professionals vs. amateurs.</li>
<li><strong>Comments:</strong> Effective framework for measuring stylistic features across expertise levels and historical periods. The elite-to-masses comparison is compelling. However, most measurements remain limited to word-level statistics.</li>
</ol>`
  },
  {
    id: '2025-08-14-mosco',
    date: '2025-08-14',
    type: 'Book',
    title: 'The Political Economy of Communication',
    author: 'Vincent Mosco',
    progress: 'Chapter 96–110',
    tags: ['Political Economy', 'Communication'],
    notes: `
<ol>
<li><strong>Social and intellectual factors shaping the political economy of communication:</strong>
  <ul>
  <li><strong>Social driving forces:</strong></li>
  </ul>
  <ol>
  <li>Media have been organized along industrial lines, with most media labor working for wages; yet media conglomerates are now so powerful that they can control the circuit of accumulation without retaining the risks of full ownership&mdash;flexible accumulation has consolidated global media power</li>
  <li>However, political economy is ill-equipped to examine behaviors organized around the household; likewise, a new vocabulary used to discuss audiences challenges political economy&mdash;audiences participate in the accumulation process through listening, reading, watching, and purchasing media content</li>
  <li><strong>The process of transnationalization:</strong> also constitutes the demand for a New World Information and Communication Order (NWICO), while &ldquo;globalization&rdquo; frequently and vaguely refers to transnationalization
    <ul>
    <li>E.g., the Non-Aligned Movement &mdash; national self-determination &mdash; universal access to communication media, control over production and distribution, and communication as a fundamental human right &mdash; examining the role of communication in the U.S.-led postwar restructuring of global capitalism</li>
    <li>New technologies expand audience control and undermine national sovereignty &mdash; embedded imagined American-style imagery &mdash; charting the growth and power of transnational communication corporations</li>
    <li>Information and communication technologies possess the power to restructure the global division of labor</li>
    </ul>
  </li>
  <li><strong>The emergence of the information society:</strong>
    <ul>
    <li>A radical rupture of time, space, and social relations</li>
    <li>Dan Schiller, <em>Digital Capitalism</em></li>
    <li>Open source and hacker networks challenge ownership: a contradiction between the desire for free access to information and capitalism&rsquo;s drive to harness information solely for generating surplus value</li>
    </ul>
  </li>
  </ol>
</li>
<li>The communication industry is fundamentally incompatible with the traditional classical economic model</li>
</ol>`
  },
  {
    id: '2025-08-14-hall',
    date: '2025-08-14',
    type: 'Book',
    title: 'Representation: Cultural Representations and Signifying Practices',
    author: 'Stuart Hall, Ed.',
    progress: 'P225–235, Chapter Four: The Spectacle of the Other',
    tags: ['Cultural Studies', 'Communication'],
    notes: `
<ol>
<li><strong>Two Guiding Questions:</strong>
  <ul>
  <li>Have the repertoires of representation around &ldquo;difference&rdquo; and &ldquo;otherness&rdquo; changed, or do earlier traces from colonial and racialized narratives remain embedded in contemporary culture?</li>
  <li>Is there a possibility for an effective politics of representation that can challenge and transform dominant stereotypical portrayals?</li>
  </ul>
</li>
<li><strong>Persistence of Difference and Power:</strong>
  <ul>
  <li>Even with new modes of visual and cultural production, many symbolic codes, visual motifs, and narrative frames of the &ldquo;racialized Other&rdquo; still echo colonial-era patterns</li>
  <li>Old and new forms often overlap: modern advertising, film, and journalism may adopt new aesthetics, yet still rely on deep-seated binaries (civilized/primitive, modern/backward, white/non-white)</li>
  </ul>
</li>
<li><strong>Representation as a Site of Power Struggle:</strong>
  <ul>
  <li>The &ldquo;spectacle of the Other&rdquo; emphasizes that seeing and being seen are part of a broader power relation</li>
  <li>Mainstream media and cultural industries do not merely &ldquo;depict&rdquo; the Other; they <em>define</em> the Other&mdash;this power to represent is central to cultural hegemony</li>
  <li>Representation is not a one-way process; it is constantly negotiated among producers, texts, and audiences, though dominant discourses generally prevail</li>
  </ul>
</li>
<li><strong>Counter-Representation Strategies:</strong>
  <ul>
  <li><strong>Reversing the stereotype:</strong> Flipping a negative stereotype into its opposite, re-signifying it in a positive or empowering way</li>
  <li><strong>Positive imagery:</strong> Presenting affirmative, authentic, and diverse representations to offset prevailing negative portrayals</li>
  <li><strong>Contesting from within:</strong> Working within mainstream forms and platforms to insert new narratives that disrupt established codes</li>
  <li>Hall warns that each approach has limits&mdash;reversal can still lock thinking into binary oppositions, while positive imagery may gloss over structural inequalities</li>
  </ul>
</li>
</ol>`
  },
  {
    id: '2025-08-11-mosco',
    date: '2025-08-11',
    type: 'Book',
    title: 'The Political Economy of Communication',
    author: 'Vincent Mosco',
    progress: 'Chapter 86–95',
    tags: ['Political Economy', 'Communication'],
    notes: `
<ol>
<li><strong>How to define communication:</strong>
  <ul>
  <li>The rhetoric of conversation should provide the standards of science just as the logic of inquiry does; understanding occurs when two or more persons exchange observations, ideas, and express them in a language that does not merely reveal reality but contributes to constructing it.</li>
  <li><strong>Two definitional approaches:</strong> information transmission versus the construction of meaning</li>
  <li><strong>Mathematically grounded communication science:</strong> Shannon and Weaver &mdash; the transmission of information from a communicator and encoder to a decoder</li>
  <li><strong>Sociological perspective:</strong> The process of constructing meaning</li>
  <li><strong>Market specialists:</strong> An interactive process between two or more parties, in which meaning is exchanged through the intentional use of symbols</li>
  <li><strong>Implications for political economy:</strong> Communication studies should view communication systems as integral to the fundamental economic, political, and cultural processes of society: the framework of capitalism&rsquo;s essential elements &mdash; capital accumulation and labor wages</li>
  </ul>
</li>
</ol>`
  },
  {
    id: '2025-08-11-andreas',
    date: '2025-08-11',
    type: 'Book',
    title: 'Rise of the Red Engineers: The Cultural Revolution and the Origins of China\'s New Class',
    author: 'Joel Andreas',
    progress: 'P213, Chapter Nine',
    tags: ['Chinese Politics', 'Cultural Studies'],
    notes: `
<ol>
<li><strong>Worker-Peasant-Soldier Students&rsquo; Attitude:</strong> They considered the loss of collective consciousness in new college students as an indicator of the reduction of political rights and participation in the New Era. This phenomenon illustrates a huge generation gap; the traditional habitus no longer existed, replaced by the alternation of ideology with individual self-consciousness.</li>
<li><strong>Middle School Changes:</strong> The rebirth of the keypoint classes, demonstrating that a brand-new hierarchy of educational systems had emerged, producing the education elite.</li>
<li><strong>Party Membership Transformation:</strong> Shorn of its ideological meaning, party membership retained its instrumental value as a political credential and networking tool, attracting ambitious university students who aspired to public service and leadership positions.</li>
<li><strong>Loss of Inspirational Core:</strong> The loss of the inspirational core of communist party membership reduced it to a political credential and networking tool.</li>
<li><strong>Core of New Tsinghua University:</strong> The transfer of class power, the flow and change of the knowledge hierarchy.</li>
</ol>`
  },
  {
    id: '2025-08-11-narrative-continued',
    date: '2025-08-11',
    type: 'Paper',
    title: 'Quantifying Narrative Similarity Across Languages',
    author: 'Waight, Messing, Shirikov, Roberts, Nagel, Greenfield, Brown, Aslett & Tucker',
    progress: 'Continued reading',
    tags: ['Computational Methods', 'Narrative Analysis'],
    notes: `
<p><strong>Language Standardization Process:</strong></p>
<ol>
<li><strong>Standardized Prompt:</strong> &ldquo;Please summarize this news article in 7&ndash;10 English sentences. Article: [insert article text]&rdquo;</li>
<li><strong>Claims Extraction:</strong> Prompt GPT-4o to extract the &ldquo;descriptive, normative, causal, and classificatory claims&rdquo; and &ldquo;people, places, things, and events&rdquo; included in each summary</li>
<li><strong>Bias Mitigation:</strong> How to deal with the bias of the LLMs</li>
</ol>
<p><strong>Two-Step Candidate Generation Process:</strong></p>
<ol>
<li><strong>Bi-encoder to Cross-encoder:</strong> Using the cutoff to filter</li>
<li><strong>Efficient Pairwise Comparison:</strong> Reducing computational complexity through hierarchical filtering</li>
</ol>`
  },
  {
    id: '2025-08-10-mosco',
    date: '2025-08-10',
    type: 'Book',
    title: 'The Political Economy of Communication',
    author: 'Vincent Mosco',
    progress: 'Chapter 57–85',
    tags: ['Political Economy', 'Communication'],
    notes: `
<ol>
<li>Marx&rsquo;s conception of the commodity: all commodities are nothing but a definite quantity of congealed labour-time</li>
<li>A critique within communication studies: orthodox Marxism overemphasizes the instrumentality and productivity of labor, reducing human beings to objects of production or mere factors of production &mdash; thus minimizing the other material practices of labor</li>
<li>The political economy of communication proposes to demonstrate how communication and culture constitute material practices, how labor and language are mutually constitutive, and how communication and information form part of the same social activity &mdash; the dialectical relationship of the social construction of meaning</li>
<li><strong>The conservative critique of political economy:</strong>
  <ol>
  <li>Conservatives hold that the growth of wealth originates from an organic order that leads people to respect tradition, which in turn clarifies social roles and the moral foundations compelling their fulfillment</li>
  <li>At its core: opposition to empowering the masses; the belief that the essence of economics is the maximization of pleasure &mdash; minimizing the sacrifice of what is unwanted while obtaining what is most desired (Jevons, 1965)</li>
  <li>Classical economics, under its preoccupation with equilibrium states, focuses on consensual change while neglecting the traditional interest in history &mdash; rendering it unable to analyze periods of transformation</li>
  <li>The market provides classical and neoclassical economics with their moral justification</li>
  </ol>
</li>
<li><strong>Several variants of political economy:</strong>
  <ol>
  <li><strong>Neoconservatism:</strong> Government as the primary beneficiary of regulation &mdash; hence the push for deregulation; essentially releasing politics to preserve scientific rigor</li>
  <li><strong>Institutional economics</strong></li>
  <li><strong>Marxist political economy:</strong> Critique of corporate concentration, exploration of state intervention, and response to transformations in production technology, industrial organization, and world markets</li>
  <li><strong>Feminist political economy:</strong> Incorporating domestic labor into the system and analysis of market exchange; lacking a concrete calculative framework</li>
  <li><strong>Environmental political economy:</strong> The transformation of the moral horizon</li>
  </ol>
</li>
<li><strong>Why political economy is needed:</strong>
  <ol>
  <li>Economics favors describing statics &mdash; everything is resolved in equilibrium, with interest limited to describing incremental change within a given set of institutions</li>
  <li>It is unable to incorporate major socioeconomic determinants into its analysis</li>
  <li>It tends to treat the market as a natural product of individual interaction, thereby exacerbating social divisions of class, race, and gender</li>
  <li>There is an urgent need to disentangle economic orthodoxy from its rhetorical system and to study it as part of a system of power</li>
  </ol>
</li>
</ol>`
  },
  {
    id: '2025-08-10-narrative',
    date: '2025-08-10',
    type: 'Paper',
    title: 'Quantifying Narrative Similarity Across Languages',
    author: 'Waight, Messing, Shirikov, Roberts, Nagel, Greenfield, Brown, Aslett & Tucker',
    progress: 'Initial reading',
    tags: ['Computational Methods', 'Narrative Analysis'],
    notes: `
<p><strong>Research Purpose:</strong> To study how ideas and narratives diffuse across text, we must first develop a method to identify whether texts share the same information and narratives, rather than the same broad themes or exact features.</p>
<p><strong>Methods:</strong> Using large language models to distill texts to their core ideas and then compare the similarity of claims rather than of words, phrases, or sentences. Sorting by SBERT and claimed by GPT-4o.</p>
<p><strong>Research Questions:</strong> The spread of Russian claims about the development of a Ukrainian bioweapons program in U.S. mainstream and fringe news websites.</p>
<ol>
<li><strong>Narrative diffusion:</strong> A process that creates narrative similarity as an empirical relic</li>
<li>When conducting or using one word, you should do a related literature review of this specific word</li>
<li><strong>Gold standard approach:</strong> Providing infinite resources to identify narrative similarity</li>
<li><strong>LLM-SBERT:</strong> Using the key claims and subjects to measure the similarity</li>
<li><strong>How to minimize the scale of large pairwise comparisons:</strong>
  <ol>
  <li>Use LLMs to distill the core claims and subjects</li>
  <li>Using the pretrained BERT-based model to generate a semantic similarity</li>
  <li>Using human annotators to label pairs identified as positive cases</li>
  </ol>
</li>
</ol>
<p><strong>Questions:</strong> How to deal with LLMs bias?</p>`
  },
  {
    id: '2025-08-02-mosco',
    date: '2025-08-02',
    type: 'Book',
    title: 'The Political Economy of Communication',
    author: 'Vincent Mosco',
    progress: 'Chapter 48–56',
    tags: ['Political Economy', 'Communication'],
    notes: `
<ol>
<li>Social relations, particularly power relations, interactively constitute the production, distribution, and consumption of resources; this requires the political economy of communication to examine the constantly shifting modes of control along the lines of production, distribution, and consumption &mdash; or how activists use new media to resist the concentration of power. However, within the communication industry, producers, distributors, and consumers cannot be precisely defined: audiences cannot be straightforwardly identified as consumers, for in consuming media products they also produce symbolic value.</li>
<li>An alternative definition of political economy: the study of control and survival in social life.</li>
</ol>`
  },
  {
    id: '2025-07-28-mosco',
    date: '2025-07-28',
    type: 'Book',
    title: 'The Political Economy of Communication',
    author: 'Vincent Mosco',
    progress: 'Chapter 30–47',
    tags: ['Political Economy', 'Communication'],
    notes: `
<ol>
<li>The fundamental analytical framework of the political economy of communication: <strong>commodification</strong>, <strong>spatialization</strong>, and <strong>structuration</strong></li>
<li><strong>The audience commodity thesis:</strong> Workers sell their labor power (attention) in return for the media content they receive; this extends the scope of labor, expands the traditional logic of the commodity, and may serve as an account of the labor transformation process under capitalism</li>
<li><strong>Labor</strong> (Braverman, 1974): A conceptual unity of imagination and creative capacity, design and execution; in the process of commodification, capital functions to separate conception from execution, to separate skill from the unskilled performance of tasks, thereby forming a managerial class, while new configurations of skill and power in production are combined to restructure the labor process</li>
<li><strong>From commodification to spatialization:</strong> The emergence of information systems enables information to transform space &mdash; redistributing industrial resources</li>
<li>The tradition of the political economy of communication treats spatialization as the institutional extension of corporate power within the communication industry</li>
</ol>`
  },
  {
    id: '2025-07-27-walder',
    date: '2025-07-27',
    type: 'Book',
    title: 'Communist Neo-Traditionalism: Work and Authority in Chinese Industry',
    author: 'Andrew G. Walder',
    progress: 'P1–P8',
    tags: ['Chinese Politics', 'Political Economy'],
    notes: `
<ol>
<li>A totalitarian society has two distinguishing characteristics:
  <ol>
  <li>The nature of the tie between the totalitarian party and its active adherents</li>
  <li>Social atomization: &ldquo;the obliteration of social ties that are not directly harnessed to the party&rsquo;s aims. Totalitarian societies recognize no legitimate distinction between private and public spheres.&rdquo;</li>
  </ol>
</li>
</ol>
<p><strong>Questions:</strong> Does social atomization only exist in a totalistic society? What about the rise of media and internet platforms?</p>
<ol>
<li>He insisted that the modern socialist society became less enforced. Where the totalitarian image places its emphasis on the disincentives and psychological states created by fear and inbred caution, the neo-traditional image emphasizes the meshing of economic and political power on the structured incentives offered by the party.</li>
<li><strong>How the social structure works:</strong> The result is a highly institutionalized network of patron-client relations that is maintained by the party and is integral to its rule: a clientelist system in which public loyalty to the party and its ideology is mingled with personal loyalties between party branch officials and their clients.</li>
<li><strong>How it&rsquo;s maintained:</strong> The neo-traditional image stresses the social network, not the group, as its main structural concept.</li>
</ol>`
  },
  {
    id: '2025-07-27-nahrgang',
    date: '2025-07-27',
    type: 'Paper',
    title: 'Written for Lawyers or Users? Mapping the Complexity of Community Guidelines',
    author: 'Nahrgang, Weidmann, Quint, Nagel, Theocharis & Roberts',
    progress: 'Full paper',
    tags: ['Platform Governance', 'Computational Methods'],
    notes: `
<p><strong>Previous Problems:</strong> As harmful content fostered many problems, and social platforms conducted content moderation, many users held low trust towards the restrictions. However, many actors tried to use community guidelines to restrict users, but created a vast difference. No research has put attention on users&rsquo; situation.</p>
<p><strong>Research Questions:</strong> Focusing on the length, readability, and semantic complexity of community guidelines.</p>
<ol>
<li><strong>Platform Typology:</strong> Chat platforms, creator platforms, forum platforms, social network platforms</li>
<li><strong>Alt Tech Platforms:</strong> Provide alternatives to Silicon Valley-controlled platforms like Gab</li>
<li><strong>Platform Governance Archive (PGA):</strong> GitHub repository makes historical versions available</li>
<li><strong>Readability Measurement:</strong> Flesch-Kincaid Grade Score relies on average sentence length and average word length in a given text</li>
</ol>`
  },
];
