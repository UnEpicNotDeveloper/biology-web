import { pageState } from "../store/pageState"
import Link from "next/link"
import React from 'react';

export default function Definition({children}: {children: string}) {
  const setTerm = pageState((state) => state.setTerm);

  switch(children) {
    case "Abiotic Synthesis":
      return (<div>The formation of complex organic molecules from simpler, <Link className="underline" href="/note" onClick={()=>setTerm("Abiotic")}>abiotic</Link> matter.</div>);
    case "Abiotic":
      return (<div>Physical rather than biological; not derived from living organisms.</div>);
    case "Actin": 
      return (<div>A <Link className="underline" href="/note" onClick={()=>setTerm("Protein")}>protein</Link> that helps cells maintain their shape and structure and enables them to move.</div>);
    case "Activator": 
      return (<div>A <Link className="underline" href="/note" onClick={()=>setTerm("Protein")}>protein</Link> that increases gene <Link className="underline" href="/note" onClick={()=>setTerm("Transcription")}>transcription</Link> by binding to DNA.</div>);
    case "Active Transport": 
      return (<div>The movement of a substance across the <Link className="underline" href="/note" onClick={()=>setTerm("Plasma Membrane")}>Plasma Membrane</Link> against its concentration or electrochemical gradient. Mediated by specific <Link className="underline" href="/note" onClick={()=>setTerm("Carrier Protein")}>Carrier Protein</Link> (called pumps or sometimes ATPase). Requires the use of energy (in the form of <Link className="underline" href="/note" onClick={()=>setTerm("ATP")}>ATP</Link>). Establishes a <Link className="underline" href="/note" onClick={()=>setTerm("Concentration Gradient")}>concentration gradient</Link> or <Link className="underline" href="/note" onClick={()=>setTerm("Electrochemical Gradient")}>electrochemical gradient</Link>.</div>);
    case "Adenylyl Cyclase": 
      return (<div>An enzyme that converts <Link className="underline" href="/note" onClick={()=>setTerm("ATP")}>ATP</Link> to cyclic AMP (<Link className="underline" href="/note" onClick={()=>setTerm("Camp")}>cAMP</Link>), a second messenger in signal <Link className="underline" href="/note" onClick={()=>setTerm("Transduction")}>transduction</Link>.</div>);
    case "Alternative RNA Splicing": 
      return (<div>The process by which different <Link className="underline" href="/note" onClick={()=>setTerm("mRNA")}>mRNA</Link> molecules are produced from the same pre-mRNA by including or excluding specific <Link className="underline" href="/note" onClick={()=>setTerm("Exon")}>exons</Link>.</div>); 
    case "Aminoacyl-tRNA Synthetase": 
      return (<div>An enzyme that attaches amino acids to their corresponding <Link className="underline" href="/note" onClick={()=>setTerm("tRNA")}>tRNA</Link> molecules.</div>);
    case "Amphipathic": 
      return (<div>Molecules that possess both <Link className="underline" href="/note" onClick={()=>setTerm("Hydrophilic")}>hydrophilic</Link> (water-attracting) and <Link className="underline" href="/note" onClick={()=>setTerm("Hydrophobic")}>hydrophobic</Link> (water-repelling) regions, like <Link className="underline" href="/note" onClick={()=>setTerm("Phospholipid")}>Phospholipids</Link>.</div>);
    case "Amplification": 
      return (<div>The process of increasing the strength of a cellular signal, often through a <Link className="underline" href="/note" onClick={()=>setTerm("Phosphorylation Cascade")}>Phosphorylation Cascade</Link>.</div>);
    case "Anaphase": 
      return (<div>The stage of <Link className="underline" href="/note" onClick={()=>setTerm("Mitosis")}>mitosis</Link> or meiosis where sister chromatids (or homologous <Link className="underline" href="/note" onClick={()=>setTerm("Chromosome")}>Chromosome</Link> in meiosis I) separate.</div>);
    case "Anticodon": 
      return (<div>A sequence of three <Link className="underline" href="/note" onClick={()=>setTerm("Nucleotide")}>nucleotide</Link> on <Link className="underline" href="/note" onClick={()=>setTerm("tRNA")}>tRNA</Link> that pairs with a complementary <Link className="underline" href="/note" onClick={()=>setTerm("Codon")}>codon</Link> on <Link className="underline" href="/note" onClick={()=>setTerm("mRNA")}>mRNA</Link>.</div>);
    case "Antiparallel": 
      return (<div>Describes the opposite orientation of the two DNA strands in a <Link className="underline" href="/note" onClick={()=>setTerm("Double Helix")}>double helix</Link> (one strand runs 5' to 3', while the other runs 3' to 5').</div>);
    case "Antiport": 
      return (<div> Type of <Link className="underline" href="/note" onClick={()=>setTerm("Active Transport")}>active transport</Link> where two different molecules or ions move in opposite directions.</div>);
    case "Antoni Van Leeuwenhoek": 
      return (<div>Was the first to view living cells, which he called "very little animalcules" (late-1600s).</div>);
    case "Apoptosis": 
      return (<div>Programmed cell death that eliminates damaged or unnecessary cells. Possible <Link className="underline" href="/note" onClick={()=>setTerm("Response")}>response</Link> or ending of a <Link className="underline" href="/note" onClick={()=>setTerm("Signal Transduction Pathway")}>Signal Transduction Pathway</Link>.</div>);
    case "Aquaporin": 
      return (<div>A type of <Link className="underline" href="/note" onClick={()=>setTerm("Channel Protein")}>channel protein</Link> in <Link className="underline" href="/note" onClick={()=>setTerm("Plasma Membrane")}>plasma membrane</Link> that facilitates <Link className="underline" href="/note" onClick={()=>setTerm("Osmosis")}>osmosis</Link>.</div>);
    case "ATP": 
      return (<div>Adenosine triphosphate; a molecule found in living cells that gives away a phosphate group as energy; "cellular battery".</div>);
    case "Autophagy": 
      return (<div>The biological process where <Link className="underline" href="/note" onClick={()=>setTerm("Cell")}>cells</Link> break down and recycle their own components.</div>);
    case "Bacteriophage": 
      return (<div>A virus that infects bacteria.</div>);
    case "Base Pairing": 
      return (<div>The specific hydrogen bonding between nitrogenous base in DNA and RNA (A-T and G-C in DNA; A-U and G-C in RNA).</div>);
    case "Benign": 
      return (<div>A non-cancerous <Link className="underline" href="/note" onClick={()=>setTerm("Tumor")}>tumor</Link> that does not invade surrounding tissues.</div>);
    case "Binary Fission": 
      return (<div>A method of asexual reproduction in <Link className="underline" href="/note" onClick={()=>setTerm("Prokaryotes")}>prokaryotes</Link> where a single cell divides into two identical <Link className="underline" href="/note" onClick={()=>setTerm("Daughter Cell")}>Daughter Cell</Link>.</div>);
    case "cAMP": 
      return (<div>A second messenger that transmits signals within cells, often involved in hormone signaling pathways.</div>);
    case "Cancer": 
      return (<div>A disease characterized by uncontrolled cell division due to genetic <Link className="underline" href="/note" onClick={()=>setTerm("Mutation")}>mutation</Link>.</div>);
    case "Carrier Protein": 
      return (<div>Hold onto their passengers and change shape that shuffles them across the <Link className="underline" href="/note" onClick={()=>setTerm("Plasma Membrane")}>plasma membrane</Link>.</div>);
    case "Cell": 
      return (<div>The smallest unit of biological organisms.</div>);
    case "Cell Cycle Control System": 
      return (<div>A system of <Link className="underline" href="/note" onClick={()=>setTerm("Checkpoint")}>Checkpoints</Link> and regulatory proteins that ensure proper cell division.</div>);
    case "Cell Plate": 
      return (<div>A structure that forms during <Link className="underline" href="/note" onClick={()=>setTerm("Cytokinesis")}>cytokinesis</Link> in plant cells, leading to the separation of <Link className="underline" href="/note" onClick={()=>setTerm("Daughter Cell")}>Daughter Cells</Link>.</div>);
    case "Cell Wall": 
      return (<div>Rigid structure outside the <Link className="underline" href="/note" onClick={()=>setTerm("Plasma Membrane")}>plasma membrane</Link> in plant cells.</div>);
    case "Central Dogma": 
      return (<div>The process in which genetic information flows from DNA to RNA to protein.</div>);
    case "Central Vacuole": 
      return (<div>Large membranous sac with diverse roles in the growth, storage, and sequestration of toxic substances. A type of <Link className="underline" href="/note" onClick={()=>setTerm("Vacuole")}>vacuole</Link>.</div>);
    case "Centriole": 
      return (<div>A ring of <Link className="underline" href="/note" onClick={()=>setTerm("Microtubule")}>Microtubule</Link> in the center of some cells' <Link className="underline" href="/note" onClick={()=>setTerm("Centrosome")}>Centrosome</Link>; centrioles/centrosomes can be used interchangeably. The region where <Link className="underline" href="/note" onClick={()=>setTerm("Sister Chromatid")}>Sister Chromatids</Link> are joined and where <Link className="underline" href="/note" onClick={()=>setTerm("Spindle Fiber")}>spindle fiber</Link> attach during <Link className="underline" href="/note" onClick={()=>setTerm("Mitosis")}>mitosis</Link>.</div>);
    case "Centromere": 
      return (<div>The region where <Link className="underline" href="/note" onClick={()=>setTerm("Sister Chromatid")}>Sister Chromatids</Link> are joined and where <Link className="underline" href="/note" onClick={()=>setTerm("Spindle Fiber")}>spindle fiber</Link> attach during <Link className="underline" href="/note" onClick={()=>setTerm("Mitosis")}>mitosis</Link>.</div>);
    case "Centrosome": 
      return (<div>The <Link className="underline" href="/note" onClick={()=>setTerm("Microtubule")}>microtubule</Link>-organizing center in animal cells that regulates cell division.</div>);
    case "Channel Protein": 
      return (<div>Protein with a <Link className="underline" href="/note" onClick={()=>setTerm("Hydrophilic")}>hydrophilic</Link> channel that molecule/atom ions use as a tunnel through the <Link className="underline" href="/note" onClick={()=>setTerm("Plasma Membrane")}>plasma membrane</Link>.</div>);
    case "Chargaff's Rule": 
      return (<div>(1) DNA composition varies between species; (2) In any species, the amount of adenine (A) is approximately equal to thymine (T), and guanine (G) is approximately equal to cytosine (C).</div>);
    case "Charged tRNA": 
      return (<div>A <Link className="underline" href="/note" onClick={()=>setTerm("tRNA")}>tRNA</Link> molecule bound to its corresponding amino acid.</div>);
    case "Checkpoint": 
      return (<div>A control point in the cell cycle that ensures conditions are favorable for cell division.</div>);
    case "Chloroplast": 
      return (<div>An <Link className="underline" href="/note" onClick={()=>setTerm("Organelle")}>organelle</Link> in plants and photosynthetic protists that absorbs sunlight and uses it to drive the synthesis of organic compounds from carbon dioxide and water.</div>);
    case "Cholesterol": 
      return (<div>Helps <Link className="underline" href="/note" onClick={()=>setTerm("Plasma Membrane")}>plasma membrane</Link> resist changes in fluidity when temperature changes; restrains <Link className="underline" href="/note" onClick={()=>setTerm("Phospholipid")}>phospholipid</Link> movement are lowers temperature for membrane solidification.</div>);
    case "Chromatin": 
      return (<div> The complex of DNA and proteins that makes up Eukaryotic <Link className="underline" href="/note" onClick={()=>setTerm("Chromosome")}>chromosomes</Link>; when the cell isn't dividing, chromatin exists in a dispersed form. The complex of DNA and proteins that makes up chromosomes in eukaryotic cells.</div>);
    case "Chromosomal Theory of Inheritance": 
      return (<div>The theory that genes are at specific locations along a <Link className="underline" href="/note" onClick={()=>setTerm("Chromosome")}>chromosome</Link>.</div>);
    case "Chromosome": 
      return (<div>Carries genes in the form of DNA; structure consists of one DNA molecule and associated proteins (see <Link className="underline" href="/note" onClick={()=>setTerm("Histones")}>histones</Link>).</div>);
    case "Cilia": 
      return (<div>A short appendage containing <Link className="underline" href="/note" onClick={()=>setTerm("Microtubule")}>microtubules</Link> in eukaryotic cells.</div>);
    case "Cisternae": 
      return (<div>The <Link className="underline" href="/note" onClick={()=>setTerm("Endoplasmic Reticulum")}>endoplasmic reticulum</Link> network of membranous tubules and sacs.</div>);
    case "Cleavage Furrow": 
      return (<div>The indentation in an animal cell membrane that forms during <Link className="underline" href="/note" onClick={()=>setTerm("Cytokinesis")}>cytokinesis</Link>.</div>);
    case "Clong Vector": 
      return (<div>A DNA molecule used to carry foreign genetic material into a cell.</div>);
    case "Coding Strand": 
      return (<div>The DNA strand with the same sequence as the transcribed <Link className="underline" href="/note" onClick={()=>setTerm("mRNA")}>mRNA</Link> (except with T instead of U).</div>);
    case "Codon": 
      return (<div>A sequence of three <Link className="underline" href="/note" onClick={()=>setTerm("Nucleotide")}>Nucleotide</Link> in mRNA that specifies an amino acid.</div>);
    case "Complementary": 
      return (<div>The property that allows <Link className="underline" href="/note" onClick={()=>setTerm("Nucleotide")}>nucleotides</Link> to form base pairs (A pairs with T/U, G pairs with C).</div>);
    case "Concentration Gradient": 
      return (<div>A difference in the concentration of a substance (solute) between two areas, leading to the movement of one substance from a region of high concentration to a region of low concentration.</div>);
    case "Conformer": 
      return (<div>An organism that does not regulate its internal environment and changes with external conditions.</div>);
    case "Contractile Vacuole": 
      return (<div>Membranous sac that helps move excess water out of certain freshwater protists.</div>);
    case "Contrast": 
      return (<div>The difference in brightness between light and dark areas of an image.</div>);
    case "Control Elements": 
      return (<div>Regulatory DNA sequences that interact with proteins to control <Link className="underline" href="/note" onClick={()=>setTerm("Gene Expression")}>gene expression</Link>.</div>);
    case "Corepressor": 
      return (<div>A molecule that inhibits gene <Link className="underline" href="/note" onClick={()=>setTerm("Transcription")}>transcription</Link> by activating a <Link className="underline" href="/note" onClick={()=>setTerm("Repressor")}>repressor</Link> protein.</div>);
    case "Cotransport": 
      return (<div>Coupling the passive <Link className="underline" href="/note" onClick={()=>setTerm("Diffusion")}>diffusion</Link> of one substance with the movement of other particles against their <Link className="underline" href="/note" onClick={()=>setTerm("Concentration Gradient")}>concentration gradient</Link>.</div>);
    case "CRISPR-Cas9": 
      return (<div>A gene-editing tool that can modify DNA sequences with high precision.</div>);
    case "Cristae": 
      return (<div>Folds in the inner membrane of a <Link className="underline" href="/note" onClick={()=>setTerm("Mitochondria")}>mitochondria</Link>.</div>);
    case "Cyotkinesis": 
      return (<div>The process of cytoplasmic division that results in two separate <Link className="underline" href="/note" onClick={()=>setTerm("Daughter Cell")}>daughter cell</Link>.</div>);
    case "Cytoplasm": 
      return (<div>The process of cytoplasmic division that results in two separate <Link className="underline" href="/note" onClick={()=>setTerm("Daughter Cell")}>daughter cell</Link>.</div>);
    case "Cytoplasmic Determinant": 
      return (<div>A molecule in the egg that influences cell differentiation in early development.</div>);
    case "Cytoskeleton": 
      return (<div> A network of <Link className="underline" href="/note" onClick={()=>setTerm("Microtubule")}>microtubules</Link>, <Link className="underline" href="/note" onClick={()=>setTerm("Microfilament")}>microfilament</Link>, and <Link className="underline" href="/note" onClick={()=>setTerm("Intermediate Filament")}>intermediate filaments</Link> that extend throughout the cytoskeleton and serve as a variety of mechanical, transport, and signaling functions.</div>);
    case "Cytosol": 
      return (<div>Semifluid portion of the <Link className="underline" href="/note" onClick={()=>setTerm("Cytoplasm")}>cytoplasm</Link> in which components are suspended. </div>);
    case "Daughter Cell": 
      return (<div>A genetically identical cell produced through cell division.</div>);
    case "Density-Dependent Inhibition": 
      return (<div>A phenomenon where crowded cells stop dividing to prevent excessive growth.</div>);
    case "Dephosphorylation": 
      return (<div>The removal of a phosphate group from a molecule, often regulating protein activity.</div>);
    case "Desmosome": 
      return (<div>A type of intracellular junction in animal cells that functions like a rivet, fastening cells together.</div>);
    case "Differential Gene Expression": 
      return (<div>The process by which cells express different genes despite having identical DNA.</div>);
    case "Differentiation": 
      return (<div>The process by which cells develop specialized functions.</div>);
    case "Diffusion": 
      return (<div>The random thermal motion of particles of liquids, solids, and gases.</div>);
    case "DNA Cloning": 
      return (<div>The process of making multiple identical copies of a DNA sequence.</div>);
    case "DNA Ligase": 
      return (<div>An enzyme that joins DNA fragments together.</div>);
    case "DNA Methylation": 
      return (<div>The addition of methyl groups to DNA, typically reducing <Link className="underline" href="/note" onClick={()=>setTerm("Gene Expression")}>gene expression</Link>.</div>);
    case "DNA Polymerase": 
      return (<div>An enzyme that synthesizes new DNA strands.</div>);
    case "DNA Profiling": 
      return (<div>A technique used to identify individuals based on their DNA.</div>);
    case "DNA Replication": 
      return (<div>The process of copying DNA before cell division.</div>);
    case "DNA Sequencing": 
      return (<div>The process of determining the precise order of <Link className="underline" href="/note" onClick={()=>setTerm("Nucleotide")}>nucleotides</Link> in DNA.</div>);
    case "Double Helix": 
      return (<div>The twisted ladder-like structure of DNA, consisting of two <Link className="underline" href="/note" onClick={()=>setTerm("Antiparallel")}>antiparallel</Link> strands wound around each other.</div>);
    case "Dynamic Equilibrium": 
      return (<div>Equal concentrations of molecules.</div>);
    case "Electrochemical Gradient": 
      return (<div>The combined effect of a <Link className="underline" href="/note" onClick={()=>setTerm("Concentration Gradient")}>concentration gradient</Link> and an electrical gradient on the movement of ions across a <Link className="underline" href="/note" onClick={()=>setTerm("Plasma Membrane")}>plasma membrane</Link>.</div>);
    case "Electron Microscope": 
      return (<div>A type of microscope that focuses a beam of electrons through the spectrum or onto its surface. There are two main different types of electron microscopes. <Link className="underline" href="/note" onClick={()=>setTerm("Transmission Electron Microscope")}>Transmission Electron Microscopes</Link> and <Link className="underline" href="/note" onClick={()=>setTerm("Scanning Electron Microscope")}>Scanning Electron Microscopes</Link>.</div>);
    case "Elongation": 
      return (<div>(Transcription): The stage of <Link className="underline" href="/note" onClick={()=>setTerm("Transcription")}>transcription</Link> where <Link className="underline" href="/note" onClick={()=>setTerm("RNA Polymerase")}>RNA polymerase</Link> adds <Link className="underline" href="/note" onClick={()=>setTerm("Nucleotide")}>nucleotides</Link> to the growing RNA strand. (<Link className="underline" href="/note" onClick={()=>setTerm("Translation")}>translation</Link>): The stage of <Link className="underline" href="/note" onClick={()=>setTerm("Translation")}>Translation</Link> where amino acids are added to the growing polypeptide chain.</div>);
    case "Embryo": 
      return (<div>A developing organism at an early stage following fertilization.</div>);
    case "Endocrine Signaling": 
      return (<div>A long-distance signaling process where <Link className="underline" href="/note" onClick={()=>setTerm("Hormone")}>Hormone</Link> travel through the bloodstream to target cell.</div>);
    case "Endocine System": 
      return (<div>The system of <Link className="underline" href="/note" onClick={()=>setTerm("Gland")}>glandss</Link> that produce and regulate <Link className="underline" href="/note" onClick={()=>setTerm("Hormone")}>hormones</Link> in the body.</div>);
    case "Endocytosis": 
      return (<div>The <Link className="underline" href="/note" onClick={()=>setTerm("Plasma Membrane")}>plasma membrane</Link> wraps around extracellular fluid / objects to form a <Link className="underline" href="/note" onClick={()=>setTerm("Vesicle")}>vesicle</Link>.</div>);
    case "Endomembrane System": 
      return (<div>A system built to: synthesize <Link className="underline" href="/note" onClick={()=>setTerm("Protein")}>protein</Link>, transport proteins into membranes and <Link className="underline" href="/note" onClick={()=>setTerm("Organelle")}>organelle</Link> out of the cell, metabolize and move lipids, and detoxify poisons.</div>);
    case "Endoplasmic Reticulum": 
      return (<div>Smooth: lacks <Link className="underline" href="/note" onClick={()=>setTerm("Ribosome")}>ribosome</Link>, functions: synthesis of lipids, metabolism of carbohydrates, detoxification of drugs and poisons, storage of calcium ion. Rough: has ribosomes on its outer surface; as it makes <Link className="underline" href="/note" onClick={()=>setTerm("Protein")}>protein</Link>, they are fed into the <Link className="underline" href="/note" onClick={()=>setTerm("Lumen")}>lumen</Link> of the ER; secretory proteins are packaged in <Link className="underline" href="/note" onClick={()=>setTerm("Transport Vesicle")}>Transport Vesicle</Link>; also important for making membranes.</div>);
    case "Endosymbiotic Theory": 
      return (<div>The theory that <Link className="underline" href="/note" onClick={()=>setTerm("Mitochondria")}>mitochondria</Link> and plastids, including <Link className="underline" href="/note" onClick={()=>setTerm("Chloroplast")}>Chloroplast</Link>, originated as prokaryotic cells engulfed by host cells; the engulfed cell and its host cell then evolved into a single organism.</div>);
    case "Endothermy": 
      return (<div>The ability of an organism to regulate its internal body temperature using metabolic heat.</div>);
    case "Enhancer": 
      return (<div>A DNA sequence that enhances <Link className="underline" href="/note" onClick={()=>setTerm("Transcription")}>transcription</Link> when bound by <Link className="underline" href="/note" onClick={()=>setTerm("Activator")}>activator</Link> proteins.</div>);
    case "Epigenetics": 
      return (<div>The study of heritable changes in <Link className="underline" href="/note" onClick={()=>setTerm("Gene Expression")}>gene expression</Link> that do not alter the DNA sequence.</div>);
    case "Erwin Chargaff": 
      return (<div>A scientist that discovered <Link className="underline" href="/note" onClick={()=>setTerm("Base Pairing")}>base pairing</Link> rules.</div>);
    case "Euchromatin": 
      return (<div>Loosely packed <Link className="underline" href="/note" onClick={()=>setTerm("Chromatin")}>chromatin</Link> that is transcriptionally active.</div>);
    case "Eukaryotes": 
      return (<div>Organisms within the domains of protists, fungi, animals, and plants.</div>);
    case "Evo-Devo": 
      return (<div>The study of how changes in development contribute to evolution.</div>);
    case "Exocytosis": 
      return (<div>A <Link className="underline" href="/note" onClick={()=>setTerm("Vesicle")}>vesicle</Link> fuses with the <Link className="underline" href="/note" onClick={()=>setTerm("Plasma Membrane")}>plasma membrane</Link>. Often <Link className="underline" href="/note" onClick={()=>setTerm("Transport Vesicle")}>transport vesicle</Link> from the <Link className="underline" href="/note" onClick={()=>setTerm("Golgi Apparatus")}>Golgi Apparatus</Link> are transported via <Link className="underline" href="/note" onClick={()=>setTerm("Microtubule")}>microtubule</Link> of the <Link className="underline" href="/note" onClick={()=>setTerm("Cytoskeleton")}>cytoskeleton</Link>. Contents of the vesicles are spilled out of the cell, "thrown out".</div>);
    case "Exon": 
      return (<div>The coding regions of <Link className="underline" href="/note" onClick={()=>setTerm("mRNA")}>mRNA</Link> that are spliced together after <Link className="underline" href="/note" onClick={()=>setTerm("Transcription")}>transcription</Link>.</div>);
    case "Extracellular Matrix": 
      return (<div>The meshwork surrounding animal cells, consisting of <Link className="underline" href="/note" onClick={()=>setTerm("Glycoprotein")}>Glycoprotein</Link> and polysaccharides.</div>);
    case "Facilitated Diffusion": 
      return (<div>The passage of molecules or ions down their <Link className="underline" href="/note" onClick={()=>setTerm("Electrochemical Gradient")}>electrochemical gradient</Link> across a biological membrane with the assistance of specific transmembrane <Link className="underline" href="/note" onClick={()=>setTerm("Transport Protein")}>transport protein</Link>.</div>);
    case "Feedback Inhibition": 
      return (<div>A regulatory mechanism where the end product of a pathway inhibits an earlier step.</div>);
    case "Fever": 
      return (<div>An elevated body temperature, often in <Link className="underline" href="/note" onClick={()=>setTerm("Response")}>response</Link> to infection, regulated by the hypothalamus.</div>);
    case "Fimbriae": 
      return (<div>Attachment structures on the surface of some <Link className="underline" href="/note" onClick={()=>setTerm("Prokaryotes")}>prokaryotes</Link> (not seen on a TEM).</div>);
    case "Flaccid": 
      return (<div>A cell that has lost water as a result of being placed in a <Link className="underline" href="/note" onClick={()=>setTerm("Hypertonic")}>hypertonic</Link> environment.</div>);
    case "Flagella": 
      return (<div>Locomotion <Link className="underline" href="/note" onClick={()=>setTerm("Organelle")}>organelle</Link> of some <Link className="underline" href="/note" onClick={()=>setTerm("Prokaryotes")}>prokaryotes</Link>.</div>);
    case "Fluid Mosaic Model": 
      return (<div>The currently accepted model of <Link className="underline" href="/note" onClick={()=>setTerm("Plasma Membrane")}>plasma membrane</Link> structure, which envisions the membrane as a mosaic of <Link className="underline" href="/note" onClick={()=>setTerm("Protein")}>protein</Link> molecules drifting laterally in a fluid bilayer of <Link className="underline" href="/note" onClick={()=>setTerm("Phospholipid")}>phospholipid</Link>.</div>);
    case "Food Vacuoles": 
      return (<div>Membranous sacs formed by <Link className="underline" href="/note" onClick={()=>setTerm("Phagocytosis")}>phagocytosis</Link> of microorganisms or particles to be used as food.</div>);
    case "Frameshift Mutation": 
      return (<div>A <Link className="underline" href="/note" onClick={()=>setTerm("Mutation")}>mutation</Link> caused by <Link className="underline" href="/note" onClick={()=>setTerm("Insertion-Deletion")}>Insertion-Deletion</Link> of <Link className="underline" href="/note" onClick={()=>setTerm("Nucleotide")}>nucleotide</Link>, shifting the <Link className="underline" href="/note" onClick={()=>setTerm("Reading Frame")}>reading frame</Link>.</div>);
    case "Frederick Griffith": 
      return (<div>Discovered bacterial <Link className="underline" href="/note" onClick={()=>setTerm("Transformation")}>transformation</Link> through experiments with mice and pneumonia bacteria.</div>);
    case "Free Water": 
      return (<div>High free water = lower solute concentration; low free water = higher solute concentration; the side with more solute has less free water.</div>);
    case "G Protein": 
      return (<div>A molecular switch involved in signal <Link className="underline" href="/note" onClick={()=>setTerm("Transduction")}>transduction</Link>, activated by<Link className="underline" href="/note" onClick={()=>setTerm("G Protein-Coupled Receptor")}> G protein-coupled receptors</Link> (GPCRs).</div>);
    case "G Protein-Coupled Receptor": 
      return (<div>A receptor that activates <Link className="underline" href="/note" onClick={()=>setTerm("G Protein")}>G proteins</Link> to transmit signals inside the cell.</div>);
    case "G0 Phase": 
      return (<div>A resting phase in the cell cycle where cells are metabolically active but do not divide.</div>);
    case "G1 Phase": 
      return (<div>The first growth phase of the cell cycle, preceding DNA replication.</div>);
    case "G2 Phase": 
      return (<div>The second growth phase of the cell cycle, following DNA replication and preceding <Link className="underline" href="/note" onClick={()=>setTerm("Mitosis")}>mitosis</Link>.</div>);
    case "Gap Junction": 
      return (<div>A type of intermolecular junction in animal cells, consisting of <Link className="underline" href="/note" onClick={()=>setTerm("Protein")}>protein</Link> surrounding a pore that allows the passage of materials between cells.</div>);
    case "Gated Channel": 
      return (<div>A transmembrane protein channel that opens or closes in <Link className="underline" href="/note" onClick={()=>setTerm("Response")}>response</Link> to a particular stimulus.</div>);
    case "Gel Electrophoresis": 
      return (<div>A technique in <Link className="underline" href="/note" onClick={()=>setTerm("Genetic Engineering")}>genetic engineering</Link> used to separate DNA fragments by size.</div>);
    case "Gene Cloning": 
      return (<div>The process of creating identical copies of a gene.</div>);
    case "Gene Expression": 
      return (<div>The process of using DNA instructions to produce proteins.</div>);
    case "Genetic Code": 
      return (<div>The set of rules defining how <Link className="underline" href="/note" onClick={()=>setTerm("Nucleotide")}>nucleotide</Link> sequences specify amino acids.</div>);
    case "Genetic Engineering": 
      return (<div>The direct manipulation of genes for practical purposes.</div>);
    case "Genome": 
      return (<div>The complete set of genetic material in an organism.</div>);
    case "Gland": 
      return (<div>An <Link className="underline" href="/note" onClick={()=>setTerm("Organ")}>organ</Link> that secretes <Link className="underline" href="/note" onClick={()=>setTerm("Hormone")}>hormone</Link> or other substances.</div>);
    case "Glycocalyx": 
      return (<div>Outer coating consisting of a capsule or slime layer.</div>);
    case "Glycolipid": 
      return (<div>A lipid with carbohydrates covalently attached to it.</div>);
    case "Glycoprotein": 
      return (<div>A protein with carbohydrates covalently attached to it.</div>);
    case "Golgi Apparatus": 
      return (<div>An <Link className="underline" href="/note" onClick={()=>setTerm("Organelle")}>organelle</Link> that acts as a warehouse for receiving, sorting, shipping, and even sometimes manufacturing; made of <Link className="underline" href="/note" onClick={()=>setTerm("Cisternae")}>Cisternae</Link>.</div>);
    case "Golgi Faces": 
      return (<div>Materials moving through the <Link className="underline" href="/note" onClick={()=>setTerm("Golgi Apparatus")}>Golgi Apparatus</Link> are received on the cis face (near the nucleus or <Link className="underline" href="/note" onClick={()=>setTerm("Endoplasmic Reticulum")}>Endoplasmic Reticulum</Link>); and move towards the trans face to be packaged into vesicles.</div>);
    case "Granum": 
      return (<div>A stack of <Link className="underline" href="/note" onClick={()=>setTerm("Thylakoid")}>thylakoid</Link> membranes within the <Link className="underline" href="/note" onClick={()=>setTerm("Chloroplast")}>Chloroplast</Link> of plant cells.</div>);
    case "Growth Factor": 
      return (<div>A protein that stimulates cell growth, division, or differentiation.</div>);
    case "Helicase": 
      return (<div>An enzyme that unwinds the DNA <Link className="underline" href="/note" onClick={()=>setTerm("Double Helix")}>double helix</Link> during replication.</div>);
    case "Hershey & Chase": 
      return (<div>Proved DNA is the genetic material through experiments with <Link className="underline" href="/note" onClick={()=>setTerm("Bacteriophage")}>Bacteriophage</Link>.</div>);
    case "Heterochromatin": 
      return (<div>Tightly packed <Link className="underline" href="/note" onClick={()=>setTerm("Chromatin")}>chromatin</Link> that is transcriptionally inactive.</div>);
    case "Histone Acetylation": 
      return (<div>The addition of acetyl groups to <Link className="underline" href="/note" onClick={()=>setTerm("Histones")}>Histones</Link>, loosening <Link className="underline" href="/note" onClick={()=>setTerm("Chromatin")}>chromatin</Link> and promoting <Link className="underline" href="/note" onClick={()=>setTerm("Transcription")}>transcription</Link>.</div>);
    case "Histone Modification": 
      return (<div>Chemical changes to <Link className="underline" href="/note" onClick={()=>setTerm("Histones")}>histones</Link> that influence <Link className="underline" href="/note" onClick={()=>setTerm("Gene Expression")}>gene expression</Link>.</div>);
    case "Histones": 
      return (<div>Help coil the DNA so it fits in the nucleus.</div>);
    case "Homeostasis": 
      return (<div>The maintenance of a stable internal environment despite external changes.</div>);
    case "Homeotic Gene": 
      return (<div>A gene that controls the development of body structures in an organism.</div>);
    case "Hormone": 
      return (<div>A signaling molecule that regulates physiological processes in organisms.</div>);
    case "Hydrophilic": 
      return (<div>Have an affinity for water (polar).</div>);
    case "Hydrophobic": 
      return (<div>Repel water (non-polar).</div>);
    case "Hypertonic": 
      return (<div>Referring to a solution, that when surrounding a cell, will cause the cell to lose water; the cell is hypotonic to the solution.</div>);
    case "Hypotonic": 
      return (<div>Referring to a solution, that when surrounding a cell, will cause the cell to gain water; the cell is hypertonic to the solution.</div>);
    case "Induced Pluripotent Stem Cells": 
      return (<div>Adult cells that have been genetically reprogrammed to an embryonic <Link className="underline" href="/note" onClick={()=>setTerm("Stem Cell")}>stem cell</Link> state.</div>);
    case "Inducer": 
      return (<div>A molecule that initiates <Link className="underline" href="/note" onClick={()=>setTerm("Gene Expression")}>gene expression</Link> by deactivating a <Link className="underline" href="/note" onClick={()=>setTerm("Repressor")}>repressor</Link>.</div>);
    case "Inducible Operon": 
      return (<div>An <Link className="underline" href="/note" onClick={()=>setTerm("Operon")}>operon</Link> that is normally off but can be turned on in the presence of an <Link className="underline" href="/note" onClick={()=>setTerm("Inducer")}>inducer</Link>.</div>);
    case "Initiation": 
      return (<div>(<Link className="underline" href="/note" onClick={()=>setTerm("Transcription")}>transcription</Link>) - The beginning of transcription where <Link className="underline" href="/note" onClick={()=>setTerm("RNA Polymerase")}>RNA polymerase</Link> binds to the <Link className="underline" href="/note" onClick={()=>setTerm("Promoter")}>promoter</Link>. (<Link className="underline" href="/note" onClick={()=>setTerm("Translation")}>translation</Link>) - The assembly of the <Link className="underline" href="/note" onClick={()=>setTerm("Ribosome")}>ribosome</Link>, <Link className="underline" href="/note" onClick={()=>setTerm("mRNA")}>mRNA</Link>, and first <Link className="underline" href="/note" onClick={()=>setTerm("tRNA")}>tRNA</Link> to begin translation.</div>);
    case "Insertion-Deletion": 
      return (<div>A type of <Link className="underline" href="/note" onClick={()=>setTerm("Mutation")}>mutation</Link> that involves adding or removing <Link className="underline" href="/note" onClick={()=>setTerm("Nucleotide")}>nucleotide</Link>.</div>);
    case "Interal Protein": 
      return (<div>Mostly transmembrane proteins that have <Link className="underline" href="/note" onClick={()=>setTerm("Hydrophobic")}>hydrophobic</Link> regions (interact with <Link className="underline" href="/note" onClick={()=>setTerm("Phospholipid")}>phospholipid</Link> tails) and <Link className="underline" href="/note" onClick={()=>setTerm("Hydrophilic")}>hydrophilic</Link> regions (exposed to the aqueous environment).</div>);
    case "Integrin": 
      return (<div>Transmembrane proteins that play a role in cell adhesion, migration, and signaling.</div>);
    case "Intermediate Filament": 
      return (<div>Only found in the cells of some animals; the various kinds function as a permanent framework of the entire cell.</div>);
    case "Interphase": 
      return (<div>The phase of the cell cycle where the cell grows, replicates DNA, and prepares for division. Part of <Link className="underline" href="/note" onClick={()=>setTerm("Mitosis")}>mitosis</Link> and meiosis.</div>);
    case "Interstitial Fluid": 
      return (<div>The fluid that surrounds and bathes the <Link className="underline" href="/note" onClick={()=>setTerm("Cell")}>cell</Link> of tissues.</div>);
    case "Intron": 
      return (<div>A noncoding region of <Link className="underline" href="/note" onClick={()=>setTerm("mRNA")}>mRNA</Link> that is removed during <Link className="underline" href="/note" onClick={()=>setTerm("RNA Splicing")}>RNA splicing</Link>.</div>);
    case "Ion Channel": 
      return (<div>A transmembrane protein channel that allows a specific ion to diffuse across the <Link className="underline" href="/note" onClick={()=>setTerm("Plasma Membrane")}>plasma membrane</Link> down its gradient.</div>);
    case "Ionization Cosntant": 
      return (<div>How much a molecule dissociates in water; NaCl turns into Na and Cl, so it has an ionization constant of 2.</div>);
    case "Isotonic": 
      return (<div>Referring to a solution that, when surrounding a <Link className="underline" href="/note" onClick={()=>setTerm("Cell")}>cell</Link>, causes no net movement of water in/out of the cell.</div>);
    case "Junk DNA": 
      return (<div>Noncoding DNA that does not encode proteins but may have regulatory functions.</div>);
    case "Kinase": 
      return (<div>An enzyme that transfers phosphate groups to proteins, playing a key role in signal <Link className="underline" href="/note" onClick={()=>setTerm("Transduction")}>transduction</Link>.</div>);
    case "Kinetochore": 
      return (<div>A <Link className="underline" href="/note" onClick={()=>setTerm("Protein")}>protein</Link> complex at the <Link className="underline" href="/note" onClick={()=>setTerm("Centromere")}>centromere</Link> where <Link className="underline" href="/note" onClick={()=>setTerm("Spindle Fiber")}>spindle fiber</Link> attach during <Link className="underline" href="/note" onClick={()=>setTerm("Mitosis")}>mitosis</Link>.</div>);
    case "Lagging Strand": 
      return (<div>The DNA strand synthesized discontinuously in short <Link className="underline" href="/note" onClick={()=>setTerm("Okazaki Fragment")}>Okazaki fragments</Link>.</div>);
    case "Leading Strand": 
      return (<div>The DNA strand is synthesized continuously in the 5' to 3' direction.</div>);
    case "Ligand": 
      return (<div>A molecule that binds to a receptor to initiate a <Link className="underline" href="/note" onClick={()=>setTerm("Signal Transduction Pathway")}>signal transduction pathway</Link>.</div>);
    case "Ligand-Gated Ion Channel": 
      return (<div>A membrane receptor that opens or closes in <Link className="underline" href="/note" onClick={()=>setTerm("Response")}>response</Link> to <Link className="underline" href="/note" onClick={()=>setTerm("Ligand")}>ligand</Link> binding.</div>);
    case "Light Microscope": 
      return (<div>Light passes through the specimen and then through glass lenses; the lens refracts the light in a way that the specimen's image is magnified as projected into an eye.</div>);
    case "Locus": 
      return (<div>The specific location of a gene on a <Link className="underline" href="/note" onClick={()=>setTerm("Chromosome")}>chromosome</Link>.</div>);
    case "Lumen": 
      return (<div>Inside of the <Link className="underline" href="/note" onClick={()=>setTerm("Endoplasmic Reticulum")}>endoplasmic reticulum</Link>.</div>);
    case "Lysosome": 
      return (<div>A membrane-enclosed sac of <Link className="underline" href="/note" onClick={()=>setTerm("Hydrophilic")}>hydrophilic</Link> enzymes found in the <Link className="underline" href="/note" onClick={()=>setTerm("Cytoplasm")}>cytoplasm</Link> of animal cells and some protists.</div>);
    case "Magnification": 
      return (<div>The ratio of an object image to its real size.</div>);
    case "Malignant": 
      return (<div>A cancerous <Link className="underline" href="/note" onClick={()=>setTerm("Tumor")}>tumor</Link> that invades surrounding tissues and can spread (metastasize).</div>);
    case "Maselson & Stahl": 
      return (<div>Confirmed the <Link className="underline" href="/note" onClick={()=>setTerm("Semiconservative Model")}>semiconservative model</Link> of DNA replication.</div>);
    case "Maternal Effect Gene": 
      return (<div>A gene in the mother that influences the early development of an <Link className="underline" href="/note" onClick={()=>setTerm("Embryo")}>embryo</Link>.</div>);
    case "Membrane Potential": 
      return (<div>The difference in electric potential between the interior and the exterior of a <Link className="underline" href="/note" onClick={()=>setTerm("Cell")}>cell</Link>.</div>);
    case "Membrane Sidedness": 
      return (<div>The different sides of the membrane have different concentrations of certain lipids and other proteins.</div>);
    case "Metaphase": 
      return (<div>The stage of <Link className="underline" href="/note" onClick={()=>setTerm("Mitosis")}>mitosis</Link> where <Link className="underline" href="/note" onClick={()=>setTerm("Chromosome")}>Chromosome</Link> align at the <Link className="underline" href="/note" onClick={()=>setTerm("Metaphase Plate")}>metaphase plate</Link>.</div>);
    case "Metaphase Plate": 
      return (<div>The imaginary plane where <Link className="underline" href="/note" onClick={()=>setTerm("Chromosome")}>chromosome</Link> align during <Link className="underline" href="/note" onClick={()=>setTerm("Metaphase")}>metaphase</Link>.</div>);
    case "Metastasis": 
      return (<div>The spread of <Link className="underline" href="/note" onClick={()=>setTerm("Cancer")}>cancer</Link> cells to new locations in the body.</div>);
    case "Microfilament": 
      return (<div>Found in <Link className="underline" href="/note" onClick={()=>setTerm("Eukaryotes")}>Eukaryotes</Link>; made of a twisted chain of actin subunits; main structural role - to bear tension "pulling force"; important for muscle cells, where they interact with myosin.</div>);
    case "Microtubule": 
      return (<div>Found in the <Link className="underline" href="/note" onClick={()=>setTerm("Cytoskeleton")}>cytoskeleton</Link> of <Link className="underline" href="/note" onClick={()=>setTerm("Eukaryotes")}>Eukaryotes</Link>; made from the globular protein tubulin; grow/shrink by adding/removing tubulin; functions: Shape and supports the cell and serves as tracks along which <Link className="underline" href="/note" onClick={()=>setTerm("Organelle")}>organelle</Link> equipped with <Link className="underline" href="/note" onClick={()=>setTerm("Motor Protein")}>Motor Protein</Link> can move.</div>);
    case "Miller-Urey Experiment": 
      return (<div>Mirrored conditions believed to be present when cells were first emerging; yielded a variety of amino acids that exist today and other organic compounds; showed that life could have formed during early Earth conditions. Proved <Link className="underline" href="/note" onClick={()=>setTerm("Abiotic Synthesis")}>abiotic synthesis</Link> was possible.</div>);
    case "Mismatch Repair": 
      return (<div>A DNA repair mechanism that fixes mismatched base pairs.</div>);
    case "Missense Mutation": 
      return (<div>A <Link className="underline" href="/note" onClick={()=>setTerm("Mutation")}>mutation</Link> that changes one amino acid in a protein.</div>);
    case "Mitochondria": 
      return (<div>An <Link className="underline" href="/note" onClick={()=>setTerm("Organelle")}>organelle</Link> found in <Link className="underline" href="/note" onClick={()=>setTerm("Eukaryotes")}>Eukaryotes</Link> that serves as the site of cellular respiration; uses oxygen to break down organic molecules and synthesize <Link className="underline" href="/note" onClick={()=>setTerm("Atp")}>ATP</Link>.</div>);
    case "Mitochondrial Matrix": 
      return (<div>The compartment of the <Link className="underline" href="/note" onClick={()=>setTerm("Mitochondria")}>mitochondria</Link> enclosed by the inner membrane and containing enzymes, <Link className="underline" href="/note" onClick={()=>setTerm("Ribosome")}>Ribosomes</Link>, and DNA.</div>);
    case "Mitosis": 
      return (<div>The process of nuclear division in <Link className="underline" href="/note" onClick={()=>setTerm("Eukaryotes")}>eukaryotes</Link> produces two identical <Link className="underline" href="/note" onClick={()=>setTerm("Daughter Cell")}>daughter cell</Link>.</div>);
    case "Mitotic Phase": 
      return (<div>The stage of the cell cycle that includes <Link className="underline" href="/note" onClick={()=>setTerm("Mitosis")}>mitosis</Link> and <Link className="underline" href="/note" onClick={()=>setTerm("Cytokinesis")}>cytokinesis</Link>.</div>);
    case "Mitotic Spindle": 
      return (<div>The entire structure of <Link className="underline" href="/note" onClick={()=>setTerm("Microtubule")}>microtubule</Link> and associated <Link className="underline" href="/note" onClick={()=>setTerm("Protein")}>protein</Link> that organizes and moves <Link className="underline" href="/note" onClick={()=>setTerm("Chromosome")}>chromosome</Link> during <Link className="underline" href="/note" onClick={()=>setTerm("Mitosis")}>mitosis</Link>.</div>);
    case "Morphogensis": 
      return (<div>The biological process that gives an organism its shape.</div>);
    case "Motor Protein": 
      return (<div>Molecular machines that convert chemical energy into mechanical force, driving movement within cells.</div>);
    case "mRNA": 
      return (<div>Single-stranded RNA that carries genetic information from DNA to <Link className="underline" href="/note" onClick={()=>setTerm("Ribosome")}>ribosomes</Link>, where it directs <Link className="underline decoration-1 underline-offset-2" href="/note" onClick={()=>setTerm("Protein")}>protein</Link> synthesis.</div>);
    case "Multipotent": 
      return (<div>A <Link className="underline" href="/note" onClick={()=>setTerm("Stem Cell")}>stem cell</Link> that can develop into a limited number of cell types.</div>);
    case "Mutagen": 
      return (<div>A <Link className="underline" href="/note" onClick={()=>setTerm("Mutation")}>mutation</Link> that changes one amino acid in a <Link className="underline" href="/note" onClick={()=>setTerm("Protein")}>protein</Link>.</div>);
    case "Mutation": 
      return (<div>A change in the <Link className="underline" href="/note" onClick={()=>setTerm("Nucleotide")}>nucleotide</Link> sequence of DNA, which can be harmful, beneficial, or neutral.</div>);
    case "Negative Feedback": 
      return (<div>A regulatory mechanism where the <Link className="underline" href="/note" onClick={()=>setTerm("Response")}>response</Link> reduces the initial stimulus.</div>);
    case "Nervous System": 
      return (<div>The network of neurons that transmits signals throughout the body.</div>);
    case "Noncoding RNA": 
      return (<div>RNA molecules that do not encode proteins but have regulatory or structural roles in the <Link className="underline" href="/note" onClick={()=>setTerm("Cell")}>cell</Link>.</div>);
    case "Nuclear Envelope": 
      return (<div>The double-layered membrane that encloses the nucleus in <Link className="underline" href="/note" onClick={()=>setTerm("Eukaryotes")}>Eukaryotes</Link>.</div>);
    case "Nuclear Pore Complexes": 
      return (<div>Large protein assemblies that act as channels in the <Link className="underline" href="/note" onClick={()=>setTerm("Nuclear Envelope")}>nuclear envelope</Link>, facilitating the selective transport of molecules between the <Link className="underline" href="/note" onClick={()=>setTerm("Nucleus")}>nucleus</Link> and <Link className="underline" href="/note" onClick={()=>setTerm("Cytoplasm")}>cytoplasm</Link>.</div>);
    case "Nuclease": 
      return (<div>An enzyme that cuts DNA or RNA by breaking phosphodiester bonds.</div>);
    case "Nucleoid Region": 
      return (<div>The region where a cell's DNA is located.</div>);
    case "Nucleolus": 
      return (<div>A specialized structure on the <Link className="underline" href="/note" onClick={()=>setTerm("Nucleus")}>nucleus</Link> consisting of chromosomal regions containing <Link className="underline" href="/note" onClick={()=>setTerm("Ribosomal RNA")}>ribosomal RNA</Link> genes along with ribosomal proteins imported from the <Link className="underline" href="/note" onClick={()=>setTerm("Cytoplasm")}>cytoplasm</Link>.</div>);
    case "Nucleotide": 
      return (<div>The building block of DNA and RNA, consisting of a sugar, phosphate group, and nitrogenous base.</div>);
    case "Nucleus": 
      return (<div>Contains most of the genes in a <Link className="underline" href="/note" onClick={()=>setTerm("Eukaryotes")}>eukaryotes</Link>; enclosed by the <Link className="underline" href="/note" onClick={()=>setTerm("Nuclear Envelope")}>nuclear envelope</Link>.</div>);
    case "Objective Lens": 
      return (<div>The lens of a <Link className="underline" href="/note" onClick={()=>setTerm("Light Microscope")}>light microscope</Link> that directly observes the object; has sizes of 4x, 10x, 100x, and 400x.</div>);
    case "Okazaki Fragment": 
      return (<div>Short DNA fragments synthesized on the <Link className="underline" href="/note" onClick={()=>setTerm("Lagging Strand")}>lagging strand</Link> during replication.</div>);
    case "Oncogene": 
      return (<div>A mutated gene that promotes uncontrolled cell division and contributes to <Link className="underline" href="/note" onClick={()=>setTerm("Cancer")}>cancer</Link>.</div>);
    case "One-Gene One-Protein": 
      return (<div>The hypothesis that each gene codes for a single <Link className="underline" href="/note" onClick={()=>setTerm("Protein")}>protein</Link>.</div>);
    case "Oparin & Haldane": 
      return (<div>Hypothesized that Earth's atmosphere was an electron-adding environment and that energy from lightning and UV radiation provided energy to build complex molecules. This discovery eventually led the <Link className="underline" href="/note" onClick={()=>setTerm("Miller-Urey Experiment")}>Miller-Urey Experiment</Link>.</div>);
    case "Operator": 
      return (<div>A DNA sequence that regulatory proteins bind to, controlling <Link className="underline" href="/note" onClick={()=>setTerm("Gene Expression")}>gene expression</Link>.</div>);
    case "Operon": 
      return (<div>A cluster of functionally related genes controlled by a single <Link className="underline" href="/note" onClick={()=>setTerm("Promoter")}>promoter</Link> in <Link className="underline" href="/note" onClick={()=>setTerm("Prokaryotes")}>prokaryotes</Link>.</div>);
    case "Organ": 
      return (<div>A structure composed of tissues that performs a specialized function.</div>);
    case "Organ System": 
      return (<div>A group of <Link className="underline" href="/note" onClick={()=>setTerm("Organ")}>organs</Link> that work together to perform a specific function.</div>);
    case "Organelle": 
      return (<div>A organized or specialized structure with a living <Link className="underline" href="/note" onClick={()=>setTerm("Cell")}>cell</Link>.</div>);
    case "Origin of Replication": 
      return (<div>The site where DNA replication begins on a <Link className="underline" href="/note" onClick={()=>setTerm("Chromosome")}>chromosome</Link>.</div>);
    case "Osmosis": 
      return (<div>The <Link className="underline" href="/note" onClick={()=>setTerm("Diffusion")}>diffusion</Link> of water molecules across a selectively permeable <Link className="underline" href="/note" onClick={()=>setTerm("Plasma Membrane")}>plasma membrane</Link>.</div>);
    case "p53 Gene": 
      return (<div>A <Link className="underline" href="/note" onClick={()=>setTerm("Tumor")}>tumor</Link> <Link className="underline" href="/note" onClick={()=>setTerm("Suppressor")}>suppressor</Link> gene that regulates the cell cycle and prevents <Link className="underline" href="/note" onClick={()=>setTerm("Cancer")}>cancer</Link>.</div>);
    case "Paracrine Signaling": 
      return (<div>A form of cell communication where signals affect nearby cells.</div>);
    case "Passive Transport": 
      return (<div>A type of membrane transport that does not require energy to move substances across <Link className="underline" href="/note" onClick={()=>setTerm("Plasma Membrane")}>plasma membrane</Link>.</div>);
    case "Pattern Formation": 
      return (<div>The process that determines the spatial arrangement of tissues and <Link className="underline" href="/note" onClick={()=>setTerm("Organ")}>organs</Link> in development.</div>);
    case "Peripheral Protein": 
      return (<div>A <Link className="underline" href="/note" onClick={()=>setTerm("Protein")}>protein</Link> loosely bound to the surface of a membrane or to part of an <Link className="underline" href="/note" onClick={()=>setTerm("Integral Protein")}>integral protein</Link> and not embedded in the <Link className="underline" href="/note" onClick={()=>setTerm("Phospholipid")}>phospholipid</Link> bilayer; functions include: Transport, Signal <Link className="underline" href="/note" onClick={()=>setTerm("Transduction")}>Transduction</Link>, Cell-Cell Recognition, Intracellular Joining, Attachment to the <Link className="underline" href="/note" onClick={()=>setTerm("Cytoskeleton")}>Cytoskeleton</Link> and <Link className="underline" href="/note" onClick={()=>setTerm("Extracellular Matrix")}>Extracellular Matrix</Link> (ECM).</div>);
    case "Peroxisome": 
      return (<div>A type of <Link className="underline" href="/note" onClick={()=>setTerm("Vesicle")}>vesicle</Link> that breaks down H2O2 (hydrogen peroxide).</div>);
    case "Phagocytosis": 
      return (<div>A type of <Link className="underline" href="/note" onClick={()=>setTerm("Active Transport")}>active transport</Link> called "cellular eating"\; produces a good vacuole; fuses with a lysosome, which causes the contents to be digested, and then diffuse into the cytoplasm.</div>);
    case "Phosphatase": 
      return (<div>An enzyme that removes phosphate groups from proteins.</div>);
    case "Phospholipid": 
      return (<div>A class of lipids crucial for cell membranes, composed of a polar <Link className="underline" href="/note" onClick={()=>setTerm("Hydrophilic")}>hydrophilic</Link> (water-loving) head that faces extracellularly and a non-polar <Link className="underline" href="/note" onClick={()=>setTerm("Hydrophobic")}>hydrophobic</Link> (water-hating) tail that faces intracellularly.</div>);
    case "Phosphorylation": 
      return (<div>The addition of a phosphate group to a molecule, often regulating <Link className="underline" href="/note" onClick={()=>setTerm("Protein")}>protein</Link> function.</div>);
    case "Phosphorylation Cascade": 
      return (<div>A sequence of <Link className="underline" href="/note" onClick={()=>setTerm("Phosphorylation")}>phosphorylation</Link> events in signal <Link className="underline" href="/note" onClick={()=>setTerm("Transduction")}>transduction</Link>.</div>);
    case "Pinocytosis": 
      return (<div>He type of <Link href="/note" onClick={()=>setTerm("Endocytosis")}>endocytosis</Link> in which the cell ingests extracellular fluid and its dissolved solutes, which then usually pass into the <Link href="/note" onClick={()=>setTerm("Cytoplasm")}>cytoplasm</Link>.</div>);
    case "Plasma Membrane": 
      return (<div>The membrane enclosing the <Link className="underline" href="/note" onClick={()=>setTerm("Cytoplasm")}>cytoplasm</Link> made out of a <Link className="underline" href="/note" onClick={()=>setTerm("Phospholipid")}>phospholipid</Link> bilayer.</div>);
    case "Plasmid": 
      return (<div>A  small circular DNA molecule found in bacteria, often used in <Link className="underline" href="/note" onClick={()=>setTerm("Genetic Engineering")}>genetic engineering</Link>.</div>);
    case "Plasmodesma": 
      return (<div>A channel that connects plant cells for communication and transport.</div>);
    case "Plasmodesmata": 
      return (<div>An open channel through the cell wall that connects the <Link className="underline" href="/note" onClick={()=>setTerm("Cytoplasm")}>cytoplasm</Link> of adjacent plant cells, allowing water, small solutes, and some larger molecules to pass between the cells.</div>);
    case "Plasmolysis": 
      return (<div>The shrinking of a plant cell's <Link className="underline" href="/note" onClick={()=>setTerm("Cytoplasm")}>cytoplasm</Link> and <Link className="underline" href="/note" onClick={()=>setTerm("Plasma Membrane")}>plasma membrane</Link> away from its cell wall when the <Link className="underline" href="/note" onClick={()=>setTerm("Cell")}>cell</Link> is placed in a <Link className="underline" href="/note" onClick={()=>setTerm("Hypertonic")}>hypertonic</Link> (cell is hypotonic) environment, causing the cell to lose water.</div>);
    case "Pluripotent": 
      return (<div>A <Link className="underline" href="/note" onClick={()=>setTerm("Stem Cell")}>stem cell</Link> that can differentiate into almost any cell type.</div>);
    case "Point Mutation": 
      return (<div>A <Link className="underline" href="/note" onClick={()=>setTerm("Mutation")}>mutation</Link> that alters a single nucleotide in DNA.</div>);
    case "Poly-A Tail": 
      return (<div>A stretch of adenine <Link className="underline" href="/note" onClick={()=>setTerm("Nucleotide")}>nucleotides</Link> added to <Link className="underline" href="/note" onClick={()=>setTerm("Mrna")}>mRNA</Link> for stability and <Link className="underline" href="/note" onClick={()=>setTerm("Translation")}>translation</Link> regulation.</div>);
    case "Polymerase Chain Reaction": 
      return (<div>A technique to amplify DNA sequences rapidly.</div>);
    case "Pore Complex": 
      return (<div>Lines each pore and regulates entry and exit of proteins and RNAs.</div>);
    case "Positive Feedback": 
      return (<div>A regulatory mechanism where the <Link className="underline" href="/note" onClick={()=>setTerm("Response")}>response</Link> amplifies the initial stimulus.</div>);
    case "Positive Gene Regulation": 
      return (<div>A regulatory mechanism where an <Link className="underline" href="/note" onClick={()=>setTerm("Activator")}>activator</Link> protein enhances gene <Link className="underline" href="/note" onClick={()=>setTerm("Transcription")}>transcription</Link>.</div>);
    case "Post-Translational Modification": 
      return (<div>Chemical changes made to proteins after <Link className="underline" href="/note" onClick={()=>setTerm("Translation")}>translation</Link>, affecting their function.</div>);
    case "Primase": 
      return (<div>An enzyme that synthesizes RNA primers needed for DNA replication.</div>);
    case "Primer": 
      return (<div>A short RNA sequence that provides a starting point for <Link className="underline" href="/note" onClick={()=>setTerm("DNA Polymerase")}>DNA polymerase</Link>.</div>);
    case "Prokaryotes": 
      return (<div>Organisms within the domains of bacteria and archaea.</div>);
    case "Prometaphase": 
      return (<div>The stage of <Link className="underline" href="/note" onClick={()=>setTerm("Mitosis")}>mitosis</Link> where the <Link className="underline" href="/note" onClick={()=>setTerm("Nuclear Envelope")}>nuclear envelope</Link> breaks down and <Link className="underline" href="/note" onClick={()=>setTerm("Microtubule")}>microtubules</Link> attach to <Link className="underline" href="/note" onClick={()=>setTerm("Kinetochore")}>kinetochores</Link>.</div>);
    case "Promoter": 
      return (<div>A DNA sequence where <Link className="underline" href="/note" onClick={()=>setTerm("RNA Polymerase")}>RNA polymerase</Link> binds to initiate <Link className="underline" href="/note" onClick={()=>setTerm("Transcription")}>transcription</Link>.</div>);
    case "Prophase": 
      return (<div>The first stage of <Link className="underline" href="/note" onClick={()=>setTerm("Mitosis")}>mitosis</Link> where <Link className="underline" href="/note" onClick={()=>setTerm("Chromatin")}>chromatin</Link> condenses into <Link className="underline" href="/note" onClick={()=>setTerm("Chromosome")}>chromosomes</Link>.</div>);
    case "Protein": 
      return (<div>A molecule composed of amino acids that performs various functions in a <Link className="underline" href="/note" onClick={()=>setTerm("Cell")}>cell</Link>.</div>);
    case "Proto-Oncogene": 
      return (<div>A normal gene that, when mutated, can become an <Link className="underline" href="/note" onClick={()=>setTerm("Oncogene")}>oncogene</Link>.</div>);
    case "Protocell": 
      return (<div>An <Link className="underline" href="/note" onClick={()=>setTerm("Abiotic")}>abiotic</Link> precursor of a living <Link className="underline" href="/note" onClick={()=>setTerm("Cell")}>cell</Link> that had a membrane-like structure and that maintained internal chemistry different from that of its surroundings.</div>);
    case "Proton Pump": 
      return (<div>A membrane <Link className="underline" href="/note" onClick={()=>setTerm("Protein")}>protein</Link> that transports hydrogen ions (protons) across a biological membrane, creating a proton <Link className="underline" href="/note" onClick={()=>setTerm("Concentration Gradient")}>concentration gradient</Link>.</div>);
    case "Purine": 
      return (<div>A nitrogenous base with two rings (adenine and guanine).</div>);
    case "Pyrimidine": 
      return (<div>A nitrogenous base with one ring (cytosine, thymine, and uracil in RNA).</div>);
    case "Ras Gene": 
      return (<div>A gene involved in cell signaling pathways; mutations can lead to <Link className="underline" href="/note" onClick={()=>setTerm("Cancer")}>cancer</Link></div>);
    case "Reading Frame": 
      return (<div>The grouping of <Link className="underline" href="/note" onClick={()=>setTerm("Nucleotide")}>nucleotides</Link> into <Link className="underline" href="/note" onClick={()=>setTerm("Codon")}>codons</Link> for <Link className="underline" href="/note" onClick={()=>setTerm("Translation")}>translation</Link>.</div>);
    case "Reception": 
      return (<div>The detection of a signal molecule by a receptor.</div>);
    case "Receptor-Mediated Endocytosis": 
      return (<div>A cellular process where cells absorb specific molecules by binding them to surface receptors, triggering the inward budding of the <Link className="underline" href="/note" onClick={()=>setTerm("Plasma Membrane")}>plasma membrane</Link> to form <Link className="underline" href="/note" onClick={()=>setTerm("Vesicle")}>vesicles</Link> containing the receptor-<Link className="underline" href="/note" onClick={()=>setTerm("Ligand")}>ligand</Link> complexes.</div>);
    case "Recombinant DNA": 
      return (<div>DNA molecules formed by combining genetic material from different sources.</div>);
    case "Regulator": 
      return (<div>A molecule or <Link className="underline" href="/note" onClick={()=>setTerm("Protein")}>protein</Link> that controls a biological process.</div>);
    case "Regulatory Gene": 
      return (<div>A gene that encodes a protein or RNA that controls the expression of other genes.</div>);
    case "Relay Molecule": 
      return (<div>A molecule in a <Link href="/note" onClick={()=>setTerm("Signal Transduction Pathway")}>signal transduction pathway</Link> that transmits a signal.</div>);
    case "Release Factor": 
      return (<div>A <Link className="underline" href="/note" onClick={()=>setTerm("Protein")}>protein</Link> that binds to the stop <Link className="underline" href="/note" onClick={()=>setTerm("Codon")}>codon</Link>, ending <Link className="underline" href="/note" onClick={()=>setTerm("Translation")}>translation</Link>.</div>);
    case "Replication Bubble": 
      return (<div>The unwound region of DNA where [replication] occurs.</div>);
    case "Replication Fork": 
      return (<div>The Y-shaped region where DNA is unwound and replicated.</div>);
    case "Repressible Operon": 
      return (<div>An <Link className="underline" href="/note" onClick={()=>setTerm("Operon")}>operon</Link> that is normally active but can be turned off when a <Link className="underline" href="/note" onClick={()=>setTerm("Repressor")}>repressor</Link> binds.</div>);
    case "Repressor": 
      return (<div>A <Link className="underline" href="/note" onClick={()=>setTerm("Protein")}>protein</Link> that binds to an <Link className="underline" href="/note" onClick={()=>setTerm("Operator")}>operator</Link> to block gene <Link className="underline" href="/note" onClick={()=>setTerm("Transcription")}>transcription</Link>.</div>);
    case "Reproductive Clonin": 
      return (<div>The process of creating an identical organism using <Link href="/note" onClick={()=>setTerm("Somatic Cell")}>somatic cell</Link> nuclear transfer.</div>);
    case "Resolution": 
      return (<div>A measure of the clarity of the image.</div>);
    case "Response": 
      return (<div>The cellular activity triggered by a signal.</div>);
    case "Restriction Enzyme": 
      return (<div>An enzyme that cuts DNA at specific sequences, used in <Link className="underline" href="/note" onClick={()=>setTerm("Genetic Engineering")}>genetic engineering</Link>.</div>);
    case "Restriction Fragment": 
      return (<div>DNA fragments produced by restriction enzymes.</div>);
    case "Restriction Point": 
      return (<div>A cell cycle <Link className="underline" href="/note" onClick={()=>setTerm("Checkpoint")}>checkpoint</Link> that determines if a cell will proceed to division.</div>);
    case "Restriction Site": 
      return (<div>A specific DNA sequence recognized and cut by a <Link className="underline" href="/note" onClick={()=>setTerm("Restriction Enzyme")}>restriction enzyme</Link>.</div>);
    case "Ribosomal RNA": 
      return (<div>Along with proteins, makes up <Link className="underline" href="/note" onClick={()=>setTerm("Ribosome")}>ribosomes</Link>; made in the <Link className="underline" href="/note" onClick={()=>setTerm("Nucleolus")}>nucleolus</Link>.</div>);
    case "Ribosomal Subunits": 
      return (<div>The two structural components (large and small) of a <Link className="underline" href="/note" onClick={()=>setTerm("Ribosome")}>ribosome</Link>.</div>);
    case "Ribosome": 
      return (<div>Complexes that synthesize proteins. Free vs. Bound: free ribosomes are suspended in the <Link className="underline" href="/note" onClick={()=>setTerm("Cytosol")}>cytosol</Link>, and make proteins that function within the <Link className="underline" href="/note" onClick={()=>setTerm("Cytosol")}>cytosol</Link>; bound ribosomes are attached to the outside of the <Link className="underline" href="/note" onClick={()=>setTerm("Endoplasmic Reticulum")}>Endoplasmic Reticulum</Link> or <Link className="underline" href="/note" onClick={()=>setTerm("Nuclear Envelope")}>nuclear envelope</Link>, make proteins that are destined for insertion into membranes.</div>);
    case "Ribozyme": 
      return (<div>An RNA molecule that functions as an enzyme, such as an intron that catalyzes its own removal during <Link className="underline" href="/note" onClick={()=>setTerm("RNA Splicing")}>RNA splicing</Link>.</div>);
    case "RNA Interference": 
      return (<div>A mechanism where small RNA molecules regulate <Link className="underline" href="/note" onClick={()=>setTerm("Gene Expression")}>gene expression</Link> by degrading <Link className="underline" href="/note" onClick={()=>setTerm("Mrna")}>mRNA</Link>.</div>);
    case "RNA Polymerase": 
      return (<div>An enzyme that synthesizes RNA from a DNA template.</div>);
    case "RNA Processing": 
      return (<div>The modifications to pre-<Link className="underline" href="/note" onClick={()=>setTerm("Mrna")}>mRNA</Link> before <Link className="underline" href="/note" onClick={()=>setTerm("Translation")}>translation</Link>, including splicing and the addition of caps and tails.</div>);
    case "RNA Splicing": 
      return (<div>The removal of introns and joining of <Link className="underline" href="/note" onClick={()=>setTerm("Exon")}>exons</Link> in <Link className="underline" href="/note" onClick={()=>setTerm("Mrna")}>mRNA</Link>.</div>);
    case "RNA World Hypothesis": 
      return (<div>Small RNA molecules were able to replicate and store genetic information about the <Link className="underline" href="/note" onClick={()=>setTerm("Vesicle")}>vesicles</Link> that carried them.</div>);
    case "Robert Hook": 
      return (<div>Was the first to view dead oak tree <Link className="underline" href="/note" onClick={()=>setTerm("Cell")}>cell</Link> walls and named them "cells" (mid-1600s).</div>);
    case "Rosalind Franklin": 
      return (<div>Used X-ray crystallography to provide crucial evidence for the helical structure of DNA.</div>);
    case "S Phase": 
      return (<div>The phase of the cell cycle where DNA replication occurs.</div>);
    case "Scale Bars": 
      return (<div>Provide a reference for the actual size of the object being observed under the microscope.</div>);
    case "Scanning Electron Microscope": 
      return (<div>Uses an electron beam to scan the surface of a sample, coated with metal atoms, to study the details of its topography. A type of <Link className="underline" href="/note" onClick={()=>setTerm("Electron Microscope")}>electron microscope</Link>.</div>);
    case "Second Messenger": 
      return (<div>A small molecule that relays a signal inside the cell.</div>);
    case "Selective Permeability": 
      return (<div>The ability of a cell membrane to control the flow of substance in and out of a <Link className="underline" href="/note" onClick={()=>setTerm("Cell")}>cell</Link>.</div>);
    case "Semiconservative Model": 
      return (<div>A model of DNA replication where each new DNA molecule has one original and one new strand.</div>);
    case "Sensor": 
      return (<div>A receptor that detects changes in the internal or external environment and sends signals to maintain <Link className="underline" href="/note" onClick={()=>setTerm("Homeostasis")}>homeostasis</Link>.</div>);
    case "Set Point": 
      return (<div>The ideal or target value for a physiological condition, such as body temperature or blood glucose level.</div>);
    case "Signal Peptide": 
      return (<div>A short sequence on proteins that directs them to specific cellular locations.</div>);
    case "Signal Transduction Pathway": 
      return (<div>A series of molecular events that convert a signal from outside the cell into a functional <Link className="underline" href="/note" onClick={()=>setTerm("Response")}>response</Link> inside the cell.</div>);
    case "Silent Mutation": 
      return (<div>A <Link className="underline" href="/note" onClick={()=>setTerm("Mutation")}>mutation</Link> that does not change the resulting amino acid.</div>);
    case "Single Stranded Binding Protein": 
      return (<div>A protein that prevents DNA strands from reannealing during replication.</div>);
    case "Sister Chromatid": 
      return (<div>One of two identical copies of a <Link className="underline" href="/note" onClick={()=>setTerm("Chromosome")}>chromosome</Link> connected at the <Link className="underline" href="/note" onClick={()=>setTerm("Centromere")}>centromere</Link>.</div>);
    case "Sodium Potassium Pump": 
      return (<div>A crucial pump that transports sodium (Na) ions out of the cell and potassium (K) ions into the <Link className="underline" href="/note" onClick={()=>setTerm("Cell")}>cell</Link>.</div>);
    case "Somatic Cell": 
      return (<div>Any body <Link className="underline" href="/note" onClick={()=>setTerm("Cell")}>cell</Link> that is not involved in reproduction (i.e., not a sperm or egg cell).</div>);
    case "Spindle Fiber": 
      return (<div>A <Link className="underline" href="/note" onClick={()=>setTerm("Microtubule")}>microtubule</Link> structure that helps separate <Link className="underline" href="/note" onClick={()=>setTerm("Chromosome")}>chromosomes</Link> during cell division.</div>);
    case "Spliceosome": 
      return (<div>A molecular complex that removes introns from pre-<Link className="underline" href="/note" onClick={()=>setTerm("Mrna")}>mRNA</Link>.</div>);
    case "Stem Cell": 
      return (<div>A cell with the ability to develop into different cell types and self-renew.</div>);
    case "Sticky End": 
      return (<div>An overhanging single-stranded DNA sequence created by <Link className="underline" href="/note" onClick={()=>setTerm("Restriction Enzyme")}>restriction enzyme</Link> cuts.</div>);
    case "Stimulus": 
      return (<div>A change in the environment that triggers a biological <Link className="underline" href="/note" onClick={()=>setTerm("Response")}>response</Link>.</div>);
    case "Stroma": 
      return (<div>Fluid in <Link className="underline" href="/note" onClick={()=>setTerm("Chloroplast")}>chloroplasts</Link> surrounding the <Link className="underline" href="/note" onClick={()=>setTerm("Thylakoid")}>thylakoid</Link> membrane.</div>);
    case "Substitution": 
      return (<div>An overhanging single-stranded DNA sequence created by <Link className="underline" href="/note" onClick={()=>setTerm("Restriction Enzyme")}>restriction enzyme</Link> cuts.</div>);
    case "Surface Area to Volume": 
      return (<div>The surface area represents the <Link className="underline" href="/note" onClick={()=>setTerm("Plasma Membrane")}>plasma membrane</Link> (exchange of nutrients), and the volume represents the <Link className="underline" href="/note" onClick={()=>setTerm("Cytoplasm")}>cytoplasm</Link> (use of nutrients); a higher ratio means higher cell efficiency.</div>);
    case "Symport": 
      return (<div>A process that moves two different molecules across a <Link className="underline" href="/note" onClick={()=>setTerm("Plasma Membrane")}>plasma membrane</Link> in the same direction; a type of <Link className="underline" href="/note" onClick={()=>setTerm("Active Transport")}>active transport</Link>.</div>);
    case "Synaptic Signaling": 
      return (<div>A type of cell communication where neurotransmitters are released from a neuron to signal an adjacent cell across a synapse.</div>);
    case "Taq Polymerase": 
      return (<div>A heat-stable <Link className="underline" href="/note" onClick={()=>setTerm("DNA Polymerase")}>DNA polymerase</Link> used in <Link className="underline" href="/note" onClick={()=>setTerm("Polymerase Chain Reaction")}>Polymerase Chain Reactions</Link>.</div>);
    case "TATA Box": 
      return (<div>A DNA sequence in <Link className="underline" href="/note" onClick={()=>setTerm("Promoter")}>promoters</Link> that helps <Link className="underline" href="/note" onClick={()=>setTerm("RNA Polymerase")}>RNA polymerase</Link> bind for <Link className="underline" href="/note" onClick={()=>setTerm("Transcription")}>transcription</Link> initiation.</div>);
    case "Telomerase": 
      return (<div>An enzyme that extends <Link className="underline" href="/note" onClick={()=>setTerm("Telomere")}>telomeres</Link> to prevent <Link className="underline" href="/note" onClick={()=>setTerm("Chromosome")}>chromosome</Link> shortening.</div>);
    case "Telomere": 
      return (<div>The repetitive DNA sequences at the ends of chromosomes that protect them from degradation.</div>);
    case "Telophase": 
      return (<div>The final stage of <Link className="underline" href="/note" onClick={()=>setTerm("Mitosis")}>mitosis</Link> or meiosis where the chromosomes de-condense, and <Link className="underline" href="/note" onClick={()=>setTerm("Nuclear Envelope")}>nuclear envelopes</Link> reform around the two sets of separated <Link className="underline" href="/note" onClick={()=>setTerm("Chromosome")}>chromosomes</Link>.</div>);
    case "Template Strand": 
      return (<div>The DNA strand used as a template for RNA synthesis.</div>);
    case "Termination": 
      return (<div>(<Link className="underline" href="/note" onClick={()=>setTerm("Translation")}>translation</Link>): The stage in <Link className="underline" href="/note" onClick={()=>setTerm("Translation")}>translation</Link> where a stop <Link className="underline" href="/note" onClick={()=>setTerm("Codon")}>codon</Link> is reached, and the <Link className="underline" href="/note" onClick={()=>setTerm("Protein")}>protein</Link> is released. (<Link className="underline" href="/note" onClick={()=>setTerm("Transcription")}>transcription</Link>): The stage in transcription where RNA synthesis ends.</div>);
    case "Terminator": 
      return (<div>A DNA sequence that signals the end of <Link className="underline" href="/note" onClick={()=>setTerm("Transcription")}>transcription</Link>.</div>);
    case "Therapeutic Cloning": 
      return (<div>The process of cloning cells for medical treatment, often to generate tissues for transplantation.</div>);
    case "Thermoregulation": 
      return (<div>The process by which organisms maintain a stable internal body temperature.</div>);
    case "Thomas Hunt Morgan": 
      return (<div>Discovered that genes are located on <Link className="underline" href="/note" onClick={()=>setTerm("Chromosome")}>chromosomes</Link> through fruit fly experiments, leading to the <Link className="underline" href="/note" onClick={()=>setTerm("Chromosomal Theory of Inheritance")}>chromosomal theory of inheritance</Link>.</div>);
    case "Thylakoid": 
      return (<div>A flattened membranous sac inside a <Link className="underline" href="/note" onClick={()=>setTerm("Chloroplast")}>chloroplast</Link>.</div>);
    case "Tight Junction": 
      return (<div>A type of intercellular junction in animal cells that prevents the leakage of material through the space between cells.</div>);
    case "Tonicity": 
      return (<div>The ability of a solution surrounding a <Link className="underline" href="/note" onClick={()=>setTerm("Cell")}>cell</Link> to cause that cell to gain or lose water concentration of non-penetrating solutes in a solution.</div>);
    case "Topoisomerase": 
      return (<div>An enzyme that prevents DNA from over-winding during replication.</div>);
    case "Totipotent": 
      return (<div>A type of <Link className="underline" href="/note" onClick={()=>setTerm("Stem Cell")}>stem cell</Link> that has the potential to develop into any cell type, including extra-embryonic tissues.</div>);
    case "Transcription": 
      return (<div>The process of making RNA from a DNA template.</div>);
    case "Transcription Factor": 
      return (<div>A protein that binds to DNA and regulates <Link className="underline" href="/note" onClick={()=>setTerm("Gene Expression")}>gene expression</Link>.</div>);
    case "Transcriptoin Initiation Complex": 
      return (<div>The <Link className="underline" href="/note" onClick={()=>setTerm("Ribosome")}>ribosome</Link>, <Link className="underline" href="/note" onClick={()=>setTerm("mRNA")}>mRNA</Link>, and first <Link className="underline" href="/note" onClick={()=>setTerm("tRNA")}>tRNA</Link> assembled at the start <Link className="underline" href="/note" onClick={()=>setTerm("Codon")}>codon</Link>.</div>);
    case "Transcription Unit": 
      return (<div>The section of DNA that is transcribed into RNA.</div>);
    case "Transduction": 
      return (<div>The process of converting an external signal into a cellular <Link className="underline" href="/note" onClick={()=>setTerm("Response")}>response</Link>, often through a <Link className="underline" href="/note" onClick={()=>setTerm("Signal Transduction Pathway")}>signal transduction pathway</Link>.</div>);
    case "Transformation": 
      return (<div>A process in which a cell takes in foreign DNA, or in <Link className="underline" href="/note" onClick={()=>setTerm("Cancer")}>cancer</Link>, the conversion of a normal cell into a cancerous one.</div>);
    case "Translation": 
      return (<div>The process of synthesizing proteins from mRNA.</div>);
    case "Translation Initiation Complex": 
      return (<div>The <Link className="underline" href="/note" onClick={()=>setTerm("Ribosome")}>ribosome</Link>, <Link className="underline" href="/note" onClick={()=>setTerm("mRNA")}>mRNA</Link>, and first <Link className="underline" href="/note" onClick={()=>setTerm("tRNA")}>tRNA</Link> assembled at the start <Link className="underline" href="/note" onClick={()=>setTerm("Codon")}>codon</Link>.</div>);
    case "Transmission Electron Microscope": 
      return (<div>Passes an electron beam through very thin sections stained with metal atoms and is primarily used to study the internal structure of cells.</div>);
    case "Transport Protein": 
      return (<div>A transmembrane <Link className="underline" href="/note" onClick={()=>setTerm("Protein")}>protein</Link> that helps a certain substance or class of closely related substances to cross the <Link className="underline" href="/note" onClick={()=>setTerm("Plasma Membrane")}>plasma membrane</Link>.</div>);
    case "Transport Vesicle": 
      return (<div>Moves throughout the <Link className="underline" href="/note" onClick={()=>setTerm("Endomembrane System")}>Endomembrane System</Link> and <Link className="underline" href="/note" onClick={()=>setTerm("Cytoplasm")}>cytoplasm</Link>.</div>);
    case "Triplet Code": 
      return (<div>The three-<Link className="underline" href="/note" onClick={()=>setTerm("Nucleotide")}>nucleotide</Link> sequences in <Link className="underline" href="/note" onClick={()=>setTerm("Mrna")}>mRNA</Link> that specify amino acids.</div>);
    case "tRNA": 
      return (<div>A molecule that carries amino acids to the <Link className="underline" href="/note" onClick={()=>setTerm("Ribosome")}>ribosome</Link> for <Link className="underline" href="/note" onClick={()=>setTerm("Protein")}>protein</Link> synthesis.</div>);
    case "Tumor": 
      return (<div>A mass of cells that grow uncontrollably due to unregulated cell division.</div>);
    case "Tumor Supressor Gene": 
      return (<div>A gene that normally prevents uncontrolled cell growth; mutations in these genes can lead to <Link className="underline" href="/note" onClick={()=>setTerm("Cancer")}>cancer</Link>.</div>);
    case "Turgidity": 
      return (<div>The force exerted in the water inside of a <Link className="underline" href="/note" onClick={()=>setTerm("Cell")}>cell</Link>.</div>);
    case "Vacuole": 
      return (<div>A membrane-bound <Link className="underline" href="/note" onClick={()=>setTerm("Organelle")}>organelle</Link> found in cells, primarily plants and fungi, that has functions in storage, waste disposal, and maintaining cell structure and turgor pressure.</div>);
    case "Vasoconstriction": 
      return (<div>The narrowing of blood vessels to reduce blood flow, often to conserve heat or increase blood pressure.</div>);
    case "Vasodilation": 
      return (<div>The widening of blood vessels to increase blood flow, often to release heat or lower blood pressure.</div>);
    case "Vesicle": 
      return (<div>Sac enclosed by a <Link className="underline" href="/note" onClick={()=>setTerm("Plasma Membrane")}>plasma membrane</Link>.</div>);
    case "Voltage": 
      return (<div>Electrical potential energy - a separation of opposite charges. Cells are more negative because of the presence of anions. Extracellular space is more positive because of the presence of cations.</div>);
    case "Water Potential": 
      return (<div>Water's ability to move (potential energy) from one area to another.</div>);
    case "Watson & Crick": 
      return (<div>Modeled the structure of DNA using X-ray data and Chargaff’s rules, discovering the <Link className="underline" href="/note" onClick={()=>setTerm("Double Helix")}>double helix</Link> structure.</div>);
    case "Wobble": 
      return (<div>The flexibility in <Link className="underline" href="/note" onClick={()=>setTerm("Base Pairing")}>Base Pairing</Link> rules at the third position of a <Link className="underline" href="/note" onClick={()=>setTerm("Codon")}>codon</Link>, allowing some <Link className="underline" href="/note" onClick={()=>setTerm("Trna")}>tRNAs</Link> to bind to multiple codons.</div>);
    case "Zygote": 
      return (<div>A fertilized egg cell formed by the fusion of a sperm and egg, marking the beginning of development.</div>);
    case "Ψ (Psi)": 
      return (<div>Symbol that represents water potential; ΨP means pressure potential (0 in an open container); ΨS means solute potential (formula: ΨS = -iCRT).</div>);
  }
}
