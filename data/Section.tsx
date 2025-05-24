export default function Placeholder({children}: {children: string}) {return ""}

export function SectionNames({children}: {children: string}) {
  switch(children) {
    case "2.1":
      return (<div>2.1  The Origin of Life</div>);
    case "2.2":
      return (<div>2.2  Cell Structure: Components and Function</div>);
    case "2.3":
      return (<div>2.3  Cell Size</div>);
    case "2.4":
      return (<div>2.4  Plasma Membranes and Permeability</div>);
    case "2.5":
      return (<div>2.5  Membrane Transport</div>);
    case "2.6":
      return (<div>2.6  Tonicity and Osmoregulation</div>);
    case "2.7":
      return (<div>2.7  Origins of Cell Compartmentalization</div>);
    case "4.1":
      return (<div>4.1  Cell Communication</div>);
    case "4.2":
      return (<div>4.2  Signal Transduction</div>);
    case "4.3":
      return (<div>4.3  Feedback</div>);
    case "4.4":
      return (<div>4.4  Cell Cycle</div>);
    case "4.5":
      return (<div>4.5  Regulation of the Cell Cycle</div>);
    case "6.1":
      return (<div>6.1  DNA and RNA Structure</div>);
    case "6.2":
      return (<div>6.2  Replication</div>);
    case "6.3":
      return (<div>6.3  Transcription and RNA Processing</div>);
    case "6.4":
      return (<div>6.4  Translation</div>);
    case "6.5-6.6":
      return (<div>6.5 - 6.6  Regulation of Gene Expression</div>);
    case "6.7":
      return (<div>6.7  Mutations</div>);
    case "6.8":
      return (<div>6.8  Biotechnology</div>);
  }
}


export function SectionNotes({children}: {children: string}) {
  switch(children) {
    case "2.1":
      return (
        <div>
          <div className="pb-[20px]">
            <div className="mb-6">
              <div className="font-bold text-lg mb-2">Steps that Led to the First Cells:</div>
              <ol className="list-decimal pl-8 mb-2">
                <li>
                  The abiotic synthesis of small organic molecules
                  <ul className="list-disc pl-8">
                    <li>Early Earth’s atmosphere contained little oxygen and was thick with water vapor</li>
                    <li>Oparin &amp; Haldane hypothesized that Earth’s atmosphere was an electron-adding environment and that energy from lighting and UV radiation provided energy to build complex molecules</li>
                    <li>The Miller-Urey Experiment</li>
                    <ul className="list-disc pl-8">
                      <li>Experiment: mirrored conditions believed to be present when cells were first emerging</li>
                      <li>Result: yielded a variety of amino acids that exist today and other organic compounds</li>
                      <li>Importance: showed that life could have formed under early Earth conditions</li>
                    </ul>
                  </ul>
                </li>
                <li>
                  The joining of small molecules into macromolecules
                  <ul className="list-disc pl-8">
                    <li>Energetically unfavorable; catalysts reduce the required activation energy</li>
                  </ul>
                </li>
                <li>
                  The packaging of molecules into protocells
                  <ul className="list-disc pl-8">
                    <li>Protocell: an abiotic precursor of a living cell that had a membrane-like structure and that maintained an internal chemistry different from that of its surroundings</li>
                    <li>Vesicles may form spontaneously when lipids or other organic molecules are added to water</li>
                  </ul>
                </li>
                <li>
                  The origin of self replicating molecules
                  <ul className="list-disc pl-8">
                    <li>The first genetic material was most likely RNA</li>
                    <ul className="list-disc pl-8">
                      <li>RNA can carry genetic information</li>
                      <li>RNA can function as an enzyme-like catalyst</li>
                    </ul>
                    <li>Ribozyme - an RNA molecule that functions as an enzyme, such as an intron that catalyzes its own removal during RNA splicing</li>
                    <li>RNA World Hypothesis</li>
                    <ul className="list-disc pl-8">
                      <li>Small molecules were able to replicate and to store genetic information about the vesicles that carried them</li>
                    </ul>
                  </ul>
                </li>
              </ol>
            </div>
            <div className="mb-6">
              <div className="font-bold text-lg mb-2">The Study of Cells</div>
              <ul className="list-disc pl-8 mb-2">
                <li>History of Microscopy
                  <ul className="list-disc pl-8">
                    <li>1500-1600s microscopes were invented and refined</li>
                    <li>Robert Hook (mid-1600s) was first to view dead oak tree cell walls and named them “cells”</li>
                    <li>Antoni van Leeuwenhoek (late-1600s) was the first to view living cells and called them “very little animalcules”</li>
                  </ul>
                </li>
                <li>Light Microscopy
                  <ul className="list-disc pl-8">
                    <li>How they work
                      <ul className="list-disc pl-8">
                        <li>Light passes through the specimen and then through the glass lenses; the lens refracts the light in a way that the specimen’s image is magnified as projected into an eye</li>
                      </ul>
                    </li>
                    <li>Parameters of Light Microscopes
                      <ul className="list-disc pl-8">
                        <li>Magnification - ratio of the object's image to its real size</li>
                        <li>Resolution - measure of clarity of the image</li>
                        <li>Contrast - difference in brightness between light and dark areas of an image</li>
                      </ul>
                    </li>
                    <li>Object Lens - the lens that directly observes the object
                      <ul className="list-disc pl-8">
                        <li>4x, 10x, 100x, and 400x (oil)</li>
                      </ul>
                    </li>
                    <li>Formulas for Common Microscopy Calculations
                      <ul className="list-disc pl-8">
                        <li>Micrograph size = actual object size × total magnification</li>
                        <li>Actual object size = micrograph size / total magnification</li>
                        <li>Magnification = micrograph size / actual object size</li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>Electron Microscopy
                  <ul className="list-disc pl-8">
                    <li>Focuses a beam of electrons through the specimen or into its surface</li>
                    <li>Shorter wavelengths of electron beams allow for a higher resolution</li>
                    <li><span className="font-bold">Cannot be used on living samples</span></li>
                    <li>Scanning Electron Microscope (SEM)
                      <ul className="list-disc pl-8">
                        <li>Uses an electron beam to scan the surface of a sample to study its topography</li>
                        <li>Requires coating the surface of the specimen in metal atoms</li>
                        <li>3D</li>
                      </ul>
                    </li>
                    <li>Transmission Electron Microscope (TEM)
                      <ul className="list-disc pl-8">
                        <li>Passes an electron beam through very thin sections stained with metal atoms and is primarily used to study the internal structure of cells</li>
                        <li>Requires slicing very thin layers of specimen</li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      );
    case "2.2":
      return (
        <div>
          <div className="pb-[20px]">
            <div className="mb-4">
              <div className="font-bold text-lg mb-2">Eukaryotic vs. Prokaryotic Cells:</div>
              <div className="overflow-x-auto">
                <table className="min-w-full border border-stone-400 text-left mb-4">
                  <thead>
                    <tr>
                      <th className="border border-stone-400 px-2 py-1 text-center">Feature</th>
                      <th className="border border-stone-400 px-2 py-1 text-center">Prokaryotic Cells</th>
                      <th className="border border-stone-400 px-2 py-1 text-center">Eukaryotic Cells</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-stone-400 px-2 py-1 text-center">Nucleus</td>
                      <td className="border border-stone-400 px-2 py-1 text-center">No nucleus; DNA in nucleoid region</td>
                      <td className="border border-stone-400 px-2 py-1 text-center">Has a membrane-bound nucleus</td>
                    </tr>
                    <tr>
                      <td className="border border-stone-400 px-2 py-1 text-center">DNA</td>
                      <td className="border border-stone-400 px-2 py-1 text-center">Circular; free-floating in the cytoplasm</td>
                      <td className="border border-stone-400 px-2 py-1 text-center">Linear; condensed as chromatin in the nucleus</td>
                    </tr>
                    <tr>
                      <td className="border border-stone-400 px-2 py-1 text-center">Organelles</td>
                      <td className="border border-stone-400 px-2 py-1 text-center">No membrane-bound organelles</td>
                      <td className="border border-stone-400 px-2 py-1 text-center">Contains membrane-bound organelles</td>
                    </tr>
                    <tr>
                      <td className="border border-stone-400 px-2 py-1 text-center">Reproduction</td>
                      <td className="border border-stone-400 px-2 py-1 text-center">Binary fission (asexual reproduction)</td>
                      <td className="border border-stone-400 px-2 py-1 text-center">Mitosis and Meiosis</td>
                    </tr>
                    <tr>
                      <td className="border border-stone-400 px-2 py-1 text-center">Domains</td>
                      <td className="border border-stone-400 px-2 py-1 text-center">Bacteria, Archaea</td>
                      <td className="border border-stone-400 px-2 py-1 text-center">Protists, Fungi, Plants, Animals</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <img src="/Section/2.2.1.png" alt="Prokaryotic vs Eukaryotic" className="my-4 mx-auto" />
            </div>
            <div className="mb-4">
              <div className="font-bold">Similarities between <span className="font-bold">all</span> cells</div>
              <ul className="list-disc pl-8">
                <li>Cell Membrane - bound by a selective barrier</li>
                <li>Cytosol - semifluid portion of cells in which components are suspended</li>
                <li>Chromosomes - carry genes in the form of DNA</li>
                <li>Ribosomes - tiny complexes that make proteins</li>
              </ul>
            </div>
            <div className="mb-4">
              <div className="font-bold">Endomembrane System:</div>
              <ul className="list-disc pl-8">
                <li>Composed of organelles:
                  <ul className="list-[circle] pl-8">
                    <li>Endoplasmic Reticulum (ER)</li>
                    <li>Golgi Apparatus</li>
                    <li>Lysosomes</li>
                    <li>Vacuoles</li>
                  </ul>
                </li>
                <li>Connected by:
                  <ul className="list-[circle] pl-8">
                    <li>Direct physical continuity</li>
                    <li>By the transfer of membrane segments as tiny vesicles</li>
                  </ul>
                </li>
                <li>Functions to:
                  <ul className="list-[circle] pl-8">
                    <li>Synthesize proteins</li>
                    <li>Transport proteins into membranes and organelles or out of the cell</li>
                    <li>Metabolizes and moves lipids</li>
                    <li>Detoxifies poisons</li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="mb-4">
              <div>Organelles are specialized structures housed inside of Eukaryotic cells:</div>
              <ul className="list-disc pl-8">
                <li>Why organelles?
                  <ul className="list-[circle] pl-8">
                    <li>Organelles increase the efficiency of the cell by isolating reactions</li>
                    <li>Allows distinct environments in terms of pH, enzymes, ions, etc.</li>
                    <li>Examples:
                      <ul className="list-[square] pl-8">
                        <li>Lysosomes contain high proton concentrations (high pH) for phagocytosis</li>
                        <li>Mitochondrial matrix have proton concentration gradients to maximize ATP production</li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>Nucleus
                  <ul className="list-[circle] pl-8">
                    <li>Contains most of the genes in a Eukaryotic cell</li>
                    <li>Enclosed by a nuclear envelope
                      <ul className="list-[square] pl-8">
                        <li>Envelope has a double membrane</li>
                        <li>Pores - envelope is perforated by pore structures 100 nm in diameter</li>
                        <li>Pore Complex - lines each pore and regulates entry and exit of proteins and mRNAs</li>
                      </ul>
                    </li>
                    <li>Chromosomes - a cellular structure consisting of one DNA molecule and associated proteins
                      <ul className="list-[square] pl-8">
                        <li>Proteins called histones help coil the DNA so it fits in the nucleus</li>
                      </ul>
                    </li>
                    <li>Chromatin - the version of DNA that makes up Eukaryotic chromosomes
                      <ul className="list-[square] pl-8">
                        <li>When the cell isn’t dividing, chromatin exists in a dispersed form (euchromatin)</li>
                        <li>Condensed form is called heterochromatin</li>
                      </ul>
                    </li>
                    <li>Nucleolus: a specialized structure in the nucleus consisting of chromosomal regions containing ribosomal RNA genes along with ribosomal proteins imported from the cytoplasm</li>
                    <li>Role of the Nucleus
                      <ul className="list-[square] pl-8">
                        <li>Location of RNA synthesized from genes in DNA</li>
                        <li>Proteins imported from the cytoplasm are assembled with RNA into large and small subunits of ribosomes</li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>Ribosomes:
                  <ul className="list-[circle] pl-8">
                    <li>Made of ribosomal RNA (made in the nucleolus) and proteins</li>
                    <li>Build proteins in two cytoplasmic locations</li>
                    <li>Free ribosomes
                      <ul className="list-[square] pl-8">
                        <li>Suspended in the cytosol</li>
                        <li>Make proteins that function within the cytosol</li>
                      </ul>
                    </li>
                    <li>Bound ribosomes
                      <ul className="list-[square] pl-8">
                        <li>Attached to outside of ER or nuclear envelope</li>
                        <li>Make proteins that are destined for insertion into membranes</li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>Endoplasmic Reticulum
                  <ul className="list-[circle] pl-8">
                    <li>Cisternae - ER network of membranous tubules and sacs</li>
                    <li>Lumen - inside of the ER</li>
                    <li>Smooth - lacks ribosomes
                      <ul className="list-[square] pl-8">
                        <li>Synthesizes lipids</li>
                        <li>Metabolizes carbohydrates</li>
                        <li>Detoxifies drugs and poisons</li>
                        <li>Stores calcium ions</li>
                      </ul>
                    </li>
                    <li>Rough - contains ribosomes on its outer surface
                      <ul className="list-[square] pl-8">
                        <li>As bound ribosomes make protein, it is fed into the lumen of the ER</li>
                        <li>Secretory proteins are packaged into transport vesicles</li>
                        <li>Also important for making membranes</li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>Golgi Apparatus
                  <ul className="list-[circle] pl-8">
                    <li>A warehouse for receiving, sorting, shipping, and manufacturing</li>
                    <li>Made of cisternae; materials moving through the Golgi are received on the cis face, near the nucleus/ER, to the trans face to be packaged into vesicles</li>
                    <li>Vesicles - sac enclosed by a membrane</li>
                  </ul>
                </li>
                <li>Lysosomes
                  <ul className="list-[circle] pl-8">
                    <li>A membrane enclosed sac of hydrolytic enzymes found in the cytoplasm of animal cells and some protists</li>
                    <li>Especially important during phagocytosis (cellular eating)</li>
                  </ul>
                </li>
                <li>Vacuoles
                  <ul className="list-[circle] pl-8">
                    <li>Food Vacuole - membranous sac formed by phagocytosis of microorganisms or particles to be used as food</li>
                    <li>Contractile Vacuole - membranous sac that helps move excess water out of certain freshwater protists</li>
                    <li>Central Vacuole - large membranous sac with diverse roles in growth, storage, and sequestration of toxic substances</li>
                  </ul>
                </li>
                <li>Chloroplasts
                  <ul className="list-[circle] pl-8">
                    <li>Absorbs sunlight and uses it to drive the synthesis of organic compounds from carbon dioxide and water</li>
                  </ul>
                </li>
                <li>Mitochondria
                  <ul className="list-[circle] pl-8">
                    <li>Serves as the site of cellular respiration</li>
                    <li>Uses oxygen to break down organic molecules and synthesizes ATP</li>
                    <li>Found in nearly all Eukaryotic cells, including plants, animals, fungi, and protists</li>
                    <li>Contains many <span className="font-bold">cristae</span>
                      <ul className="list-[square] pl-8">
                        <li>Cristae - folds in the inner mitochondrial membrane that increase surface area and therefore the efficiency of the mitochondria</li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
              <img src="/Section/2.2.2.png" alt="Cell Structure" className="my-4 mx-auto" />
            </div>
          </div>
        </div>
      );
    case "2.3":
      return (
        <div>
          <div className="pb-[20px]">
            <div className="mb-8">
              <div className="mb-4">The biggest factor affecting a cell's size is its <span className="font-bold">surface area to volume ratio</span>.</div>
              <div className="mb-4">In a cell:</div>
              <ul className="list-disc pl-8 mb-4">
                <li>Surface area represents the plasma membrane (how many nutrients can be exchanged with the environment)</li>
                <li>Volume represents the cytoplasm (how many nutrients are within the cell)</li>
              </ul>
              <div className="mb-8">A higher ratio indicates that the cell has a higher efficiency</div>
              <div className="mb-4 font-bold">Limitations of cell Size:</div>
              <ul className="list-disc pl-8 mb-4">
                <li>A cell can only be so small before the logistics of carrying out cellular metabolism become impossible</li>
                <li>When a cell becomes too large, its volume is significantly larger than its surface area. This means that it is not able to exchange enough nutrients with the environment to keep up with its enormous size, so it will die.</li>
              </ul>
              <div className="mb-4">
                Generally, Prokaryotic cells are smaller in diameter (1 - 5 micrometers), while Eukaryotic cells are larger in diameter (10 - 100 micrometers)
              </div>
            </div>
          </div>
        </div>
      );
    case "2.4":
      return (
        <div>
          <div className="pb-[20px]">
            <div className="mb-8">
              <div>The plasma membrane is composed of three main types of molecules:</div>
              <ul className="list-disc pl-8">
                <li>Lipids (mainly phospholipids)</li>
                <ul className="list-disc pl-12">
                  <li>
                    Together they form the phospholipid bilayer (PBL)
                    <div className="flex justify-center my-4">
                      <img src="/Section/2.4.1.png" alt="Phospholipid Bilayer" className="max-w-[400px] max-h-[350px] bg-white" />
                    </div>
                  </li>
                </ul>
                <li>Proteins</li>
                <li>
                  Small amounts of carbohydrates
                  <div className="pl-8">Phospholipid bilayer with embedded proteins</div>
                </li>
              </ul>
              <div className="pl-8">Amphipathic phospholipids; hydrophilic heads, hydrophobic tails</div>
            </div>
            <div className="mb-8">
              <div>Components of the membrane:</div>
              <ul className="list-disc pl-8">
                <li>
                  Proteins
                  <ul className="list-[circle] pl-8">
                    <li>
                      Transport - protein may act as a channel or may shuffle substances from one side to the other by changing shape
                    </li>
                    <li>
                      Enzymatic Activity - a protein built into the membrane may be an enzyme with its active site (where the reactant binds) exposed to the substances in the adjacent solution
                    </li>
                    <li>
                      Signal Transduction - a membrane protein (receptor) may have a binding site with a specific shape that fits the shape of a chemical messenger
                    </li>
                    <li>
                      Cell-Cell Recognition - some glycoproteins serve as identification tags that are specifically recognized by membrane proteins of other cells
                    </li>
                    <li>
                      Intracellular Joining - membrane proteins of adjacent cells may hook together in various kinds of <span className="font-bold">junctions</span>
                    </li>
                  </ul>
                  <ul className="list-[square] pl-12">
                    <li>
                      Junctions in plant cells:
                      <ul className="list-disc pl-8">
                        <li>
                          Plasmodesmata - an open channel through the cell wall that connects the cytoplasm of adjacent plant cells, allowing water, small solutes, and some larger molecules to pass between the cells
                        </li>
                      </ul>
                    </li>
                    <li>
                      Junctions in animal cells:
                      <ul className="list-disc pl-8">
                        <li>
                          Tight Junctions - a type of intercellular junction that prevents the leakage of material through the space between cells
                        </li>
                        <li>
                          Desmosomes - a type of intercellular junction that functions as a rivet, fastening cells together
                        </li>
                        <li>
                          Gap Junctions - a type of intercellular junction consisting of proteins surrounding a pore that allows the passage of materials between cells (similar to plasmodesmata)
                        </li>
                      </ul>
                    </li>
                    <li>
                      Attachment to the Cytoskeleton and Extracellular Matrix (<span className="font-bold">ECM</span>) - microfilaments or other elements of the cytoskeleton may be noncovalently bound to membrane proteins, a function that helps maintain cell shape and stabilizes the location of certain membrane proteins
                    </li>
                    <li>
                      ECM - the meshwork surrounding animal cells that consists of glycoproteins, polysaccharides, and proteoglycans
                      <ul className="list-disc pl-8">
                        <li>Most abundant is collagen</li>
                      </ul>
                    </li>
                    <li>
                      Microfilaments - double twisted chain of actin subunits found in all Eukaryotic cells
                      <ul className="list-disc pl-8">
                        <li>Main role is to bear tension (pulling force)</li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="list-[circle] pl-8">
                    <li>
                      Describing membrane proteins
                      <ul className="list-[square] pl-8">
                        <li>
                          Integral Proteins - span the entire cell
                          <ul className="list-disc pl-8">
                            <li>Have both hydrophilic (water loving) regions exposed to the aqueous environment and hydrophobic (water hating) regions interacting with the phospholipid tails</li>
                            <li>May have channels going through them</li>
                          </ul>
                        </li>
                        <li>
                          Peripheral - a protein loosely bound to the surface of a membrane or to part of an integral protein and not embedded in the lipid bilayer
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  Cholesterol
                  <ul className="list-[circle] pl-8">
                    <li>Helps membranes resist changes in fluidity when temperature changes</li>
                    <li>Restraints phospholipid movement and lowers temperature for membrane solidification</li>
                  </ul>
                </li>
                <li>
                  Glycoproteins/glycolipids - carbohydrates attached to either proteins or lipids
                </li>
              </ul>
            </div>
            <div className="mb-8">
              <div className="font-bold">Fluid Mosaic Model</div>
              <ul className="list-disc pl-8">
                <li>
                  The currently accepted model of cell membrane structure, which envisions the membrane as a mosaic of protein molecules drifting laterally in a fluid bilayer of phospholipids
                </li>
              </ul>
              <div className="flex justify-center my-4">
                <img src="/Section/2.4.2.jpg" alt="Fluid Mosaic Model" className="max-w-[600px] max-h-[360px]" />
              </div>
            </div>
            <div className="mb-8">
              <div className="font-bold">Selective Permeability</div>
              <ul className="list-disc pl-8">
                <li>The ability of a cell membrane to control the flow of substances in and out</li>
                <li>
                  Small nonpolar (O<sub>2</sub>, CO<sub>2</sub>) pass freely
                </li>
                <li>
                  Large, polar, or charged (glucose, ions) require proteins to move through
                </li>
              </ul>
            </div>
          </div>
        </div>
      );
    case "2.5":
      return (
        <div>
          <div className="pb-[20px]">
            <div className="text-3xl text-center mb-8">2.5 Membrane Transport</div>
            <div className="mb-6">
              <div className="font-bold mb-2">Passive Transport</div>
              <ul className="list-disc pl-8 mb-4">
                <li>Requires no energy</li>
                <li>
                  Molecules move down <span className="font-bold">concentration gradient</span> (high concentration &rarr; low concentration)
                </li>
              </ul>
              <ul className="list-disc pl-12 mb-2">
                <li>Concentration Gradient - a difference in the substance concentration of two areas</li>
                <li>Substances flow from where they are highly concentrated to where they are less concentrated</li>
                <li>Image explaining a gradient</li>
              </ul>
              <div className="font-bold mt-4 mb-2">Types of Passive Transport</div>
              <ul className="list-disc pl-12 mb-2">
                <li>
                  <span className="font-bold">Simple Diffusion</span>
                  <ul className="list-[circle] pl-8">
                    <li>Diffusion of nonpolar substances directly across the phospholipid bilayer down their concentration gradient without any cellular energy</li>
                    <li>Molecules must be small and nonpolar in order to minimize the interactions with the phospholipid bilayer</li>
                  </ul>
                </li>
                <li>
                  <span className="font-bold">Facilitated Diffusion</span>
                  <ul className="list-[circle] pl-8">
                    <li>The passage of molecules or ions down their concentration gradients across a biological membrane with the assistance of specific transmembrane transport proteins</li>
                  </ul>
                </li>
                <li>
                  <span className="font-bold">Osmosis</span>
                  <ul className="list-[circle] pl-8">
                    <li>The diffusion of water molecules across a selectively permeable membrane</li>
                    <li>An intermediate form of diffusion somewhere in between simple and facilitated diffusion</li>
                    <li>
                      <span className="font-bold">Water constantly diffuses across the membrane (simple diffusion)</span> but the rate of diffusion can be increased by using channel proteins called aquaporins that specifically facilitate the movement of water across a membrane
                    </li>
                    <li>Water’s polar nature is the reason it, without transport proteins, diffuses slowly</li>
                  </ul>
                </li>
              </ul>
              <div className="font-bold mt-4 mb-2">Key Idea - passive transport leads to equilibrium</div>
              <div className="flex justify-center my-4">
                <img src="/Section/2.5.5.png" alt="Passive Transport Equilibrium" className="max-w-[600px] max-h-[300px]" />
              </div>
            </div>
            <div className="mb-6">
              <div className="font-bold mb-2">Active Transport</div>
              <ul className="list-disc pl-8 mb-2">
                <li>
                  The movement of a substance across the cell membrane against its concentration or <span className="font-bold">electrochemical gradient</span>
                </li>
                <li>
                  Electrochemical Gradient - similar to a concentration gradient, but instead of involving the concentration of molecules it involves the difference of charges as a result of differing concentrations of hydrogen ions
                </li>
                <li>Mediated by specific carrier proteins (called pumps or sometimes ATPase)</li>
                <li>Requires ATP</li>
                <li>Establishes a concentration/electrochemical gradient</li>
                <li>
                  <span className="font-bold">The Sodium - Potassium Pump (Na<sup>+</sup> / K<sup>+</sup> ATPase)</span>
                  <ul className="list-[circle] pl-8">
                    <li>A common pump of active transport that moves sodium outside of a cell while also moving potassium into the cell</li>
                  </ul>
                </li>
              </ul>
              <div className="flex justify-center my-4">
                <img src="/Section/2.5.2.png" alt="Sodium Potassium Pump" className="max-w-[600px] max-h-[260px]" />
              </div>
              <div className="font-bold mt-4 mb-2">Cotransport</div>
              <ul className="list-disc pl-8 mb-2">
                <li>
                  A type of active transport that couples the passive diffusion of one substance with the movement of other particles against their concentration gradients
                </li>
                <li>
                  <span className="font-bold">Symport</span>
                  <ul className="list-[circle] pl-8">
                    <li>One substance diffuses down its concentration gradient pulls another substance in the same direction against its concentration gradient</li>
                    <li>Ex: 3 sodium move down their concentration gradient into the cell, bringing 1 glucose into the cell against its concentration gradient</li>
                  </ul>
                </li>
                <li>
                  <span className="font-bold">Antiport</span>
                  <ul className="list-[circle] pl-8">
                    <li>One substance diffuses down its concentration gradient pulls another substance in the opposite direction against its concentration gradient</li>
                    <li>Ex: 3 sodium ions move down their concentration gradient into the cell, pulling 2 calcium ions out of the cell against its concentration gradient</li>
                  </ul>
                </li>
              </ul>
              <div className="flex justify-center my-4">
                <img src="/Section/2.5.1.png" alt="Cotransport" className="max-w-[600px] max-h-[220px]" />
              </div>
            </div>
            <div className="mb-6">
              <div className="font-bold mb-2">Bulk Transport</div>
              <ul className="list-disc pl-8 mb-2">
                <li>
                  <span className="font-bold">A type of active transport because it requires energy!</span>
                </li>
                <li>Used for particles too large to diffuse through the plasma membrane or be moved across it by transport proteins; instead, cross the membrane in bulk packaged into vesicles</li>
                <li>
                  <span className="font-bold">Exocytosis</span>
                  <ul className="list-[circle] pl-8">
                    <li>A vesicle fuses with the plasma membrane</li>
                    <li>Often transport vesicles from the golgi apparatus are transported via microtubules of the cytoskeleton</li>
                    <li>Contents of the vesicle are “spilled” out of the cell</li>
                    <li>Reasons to perform exocytosis:
                      <ul className="list-[square] pl-8">
                        <li>Export proteins</li>
                        <li>Release neurotransmitters</li>
                        <li>Deliver proteins and carbohydrates</li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="font-bold">Endocytosis</span>
                  <ul className="list-[circle] pl-8">
                    <li>The plasma membrane wraps around extracellular substances to form a vesicle</li>
                    <li>
                      <span className="font-bold">Phagocytosis</span> - Cellular Eating
                      <ul className="list-[square] pl-8">
                        <li>Produces a food vacuole</li>
                        <li>Fuses with a lysosome, which causes the contents to be digested and then diffuse into the cytoplasm</li>
                      </ul>
                    </li>
                    <li>
                      <span className="font-bold">Pinocytosis</span> - Cellular Drinking
                      <ul className="list-[square] pl-8">
                        <li>Cell ingests extracellular fluid and its dissolved solutes</li>
                        <li>Solute can usually pass into the cytoplasm</li>
                      </ul>
                    </li>
                    <li>
                      <span className="font-bold">Receptor-mediated Endocytosis</span>
                      <ul className="list-[square] pl-8">
                        <li>The movement of specific molecules into a cell by inward budding of vesicles containing proteins with receptor sites specific to the molecules being taken in</li>
                        <li>Enables a cell to acquire bulk quantities of specific substances</li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
              <div className="flex flex-wrap justify-center gap-8 my-4">
                <img src="/Section/2.5.4.png" alt="Bulk Transport 1" className="max-w-[220px] max-h-[250px]" />
                <img src="/Section/2.5.3.png" alt="Bulk Transport 2" className="max-w-[380px] max-h-[260px]" />
              </div>
            </div>
          </div>
        </div>
      );
    case "2.6":
      return (
        <div>
          <div className="pb-[20px]">
            <div className="text-3xl text-center mb-8">2.6 Osmoregulation &amp; Tonicity</div>
            <div className="mb-6">
              <div className="font-bold mb-2">Osmoregulation:</div>
              <ul className="list-disc pl-8 mb-4">
                <li>The process by which organisms regulate water and solute concentrations to maintain homeostasis</li>
              </ul>
              <div className="flex justify-center my-4">
                <img src="/Section/2.6.1.png" alt="Semipermeable membrane osmosis" className="max-w-[544px] max-h-[308px]" />
              </div>
              <div className="pl-8 mb-4">
                <span className="font-bold">Note:</span> the semipermeable membrane allows only water to pass through; not solute particles
              </div>
              <ul className="list-disc pl-8 mb-4">
                <li>In the diagram above, the solution on the right has more solute particles per unit of water volume compared to the solution on the left</li>
                <li>Consequently, the water will flow into the solution on the right to even out the ratio of solute particles per unit of water volume</li>
                <li className="font-bold">Water Potential</li>
              </ul>
              <ul className="list-disc pl-12 mb-4">
                <li>Water’s ability to move from one area to another</li>
                <li>
                  Water <span className="font-bold">always</span> moves from a higher to lower water potential (less to more negative)
                </li>
                <li>
                  It is given by the formula: Ψ = Ψ<sub>p</sub> + Ψ<sub>s</sub>
                </li>
              </ul>
              <ul className="list-disc pl-16 mb-2">
                <li>
                  Ψ<sub>p</sub>: the pressure potential of a solution; 0 in an open container
                </li>
              </ul>
              <ul className="list-disc pl-24 mb-2">
                <li>Positive Ψ<sub>p</sub> indicates exertion of pressure on the cell</li>
                <li>Negative Ψ<sub>p</sub> indicates suction (rare)</li>
              </ul>
              <ul className="list-disc pl-16 mb-2">
                <li>Ψ<sub>s</sub></li>
              </ul>
              <ul className="list-disc pl-24 mb-2">
                <li>Formula: Ψ<sub>s</sub> = -iCRT</li>
              </ul>
              <ul className="list-disc pl-32 mb-2">
                <li>i = ionization constant</li>
              </ul>
              <ul className="list-disc pl-40 mb-2">
                <li>How many particles the molecule dissociates into</li>
              </ul>
              <ul className="list-disc pl-48 mb-2">
                <li>Usually 1 for molecules like glucose</li>
                <li>2 for NaCl (becomes Na and Cl in water)</li>
              </ul>
              <ul className="list-disc pl-32 mb-2">
                <li>C = concentration (mol / liter)</li>
                <li>R = 0.0831 (constant)</li>
                <li>
                  T = temperature (in Kelvin; Kelvin = °C + 273)
                </li>
              </ul>
            </div>
            <div className="mb-6">
              <div className="font-bold mb-2">Tonicity</div>
              <ul className="list-disc pl-8 mb-2">
                <li>The relative concentration of solutes in a solution compared to the cytoplasm of a cell</li>
                <li>Types of Solution Tonicities</li>
              </ul>
              <ul className="list-disc pl-12 mb-2">
                <li>
                  <span className="font-bold">Isotonic:</span> the solution concentration is equal both inside and outside the cell; there is no net water movement
                </li>
                <li>
                  <span className="font-bold">Hypertonic:</span> the solution has a lower solute concentration than the cell; water moves from the cell to the solution
                </li>
                <li>
                  <span className="font-bold">Hypotonic:</span> the solution has a higher solute concentration than the cell; water moves from the solution to the cell
                </li>
              </ul>
              <div className="flex justify-center my-4">
                <img src="/Section/2.6.2.png" alt="Tonicity diagram" className="max-w-[624px] max-h-[293px]" />
              </div>
              <ol className="list-decimal pl-8 mb-2">
                <li>The solution is hypotonic (has more solute than the cell) so water flows into the cell</li>
                <li>The solution is isotonic (has equal solute to the cell) so water flows equally between the cell and the solution</li>
                <li>The solution is hypertonic (has less solute than the cell) so water flows into the solution</li>
              </ol>
              <div className="mt-4">
                <span className="font-bold">KEY CONCEPT:</span> water is constantly flowing between a cell and its environment, it just flows more into the cell in a hypotonic solution and more out of the cell in a hypertonic solution
              </div>
            </div>
          </div>
        </div>
      );
    case "2.7":
      return (
        <div>
          <div className="pb-[20px]">
            <div className="text-3xl mb-6">Endosymbiotic Theory</div>
            <ul className="list-disc pl-8 mb-4">
              <li>
                The theory that <span className="font-bold">mitochondria</span> and plastids, including <span className="font-bold">chloroplasts</span>, originated as prokaryotic cells engulfed by host cells. The engulfed cell and its host cell then evolved into a single organism.
              </li>
            </ul>
            <ul className="list-disc pl-12 mb-4">
              <li>
                <span className="font-bold">Mitochondria</span> - an organelle found in eukaryotic cells that serves as the site of cellular respiration; uses oxygen to break down organic molecules and synthesizes ATP
              </li>
              <li>
                <span className="font-bold">Chloroplasts</span> - an organelle in plants and photosynthetic protists that absorbs sunlight and uses it to drive the synthesis of organic compounds from carbon dioxide and water
              </li>
            </ul>
            <div className="font-bold mb-2">Evidence:</div>
            <ul className="list-disc pl-12 mb-4">
              <li>Mitochondria and typical chloroplasts have two membranes surrounding them</li>
              <li>Mitochondria and chloroplasts contain ribosomes, as well as circular DNA molecules—like bacterial chromosomes—associated with their inner membrane</li>
              <li>
                Mitochondria and chloroplasts are autonomous organelles that grow and reproduce independently within the cell
                <div className="flex justify-center my-4">
                  <img src="/Section/2.7.1.jpg" alt="Endosymbiotic Theory Diagram" className="max-w-[600px] max-h-[220px]" />
                </div>
              </li>
            </ul>
          </div>
        </div>
      );
    case "4.1":
      return (
        <div>
          <div className="pb-[20px]">
            <div className="font-bold text-2xl mb-4">Importance of Communication</div>
            <ul className="list-disc pl-8 mb-2">
              <li>Cells communicate for the proper functioning of the cell and the continuing evolving of the cell as a whole</li>
              <li>Types of Signaling</li>
            </ul>
            <ul className="list-disc pl-12 mb-2">
              <li className="font-bold">Local Signaling</li>
              <ul className="list-disc pl-16 mb-2">
                <li className="font-bold">Cell Junctions</li>
                <ul className="list-disc pl-20 mb-2">
                  <li>Neighboring cells in an animal or plant often adhere, interact and communicate via sites of direct contact</li>
                </ul>
                <li className="font-bold">Direct Contact</li>
                <ul className="list-disc pl-20 mb-2">
                  <li>Between membrane-bound cell surface molecules of adjacent cells, immune response, and embryo development</li>
                </ul>
                <li className="font-bold">Paracrine</li>
                <ul className="list-disc pl-20 mb-2">
                  <li>Signaling molecules are secreted by the signaling cell</li>
                </ul>
                <li className="font-bold">Synaptic</li>
                <ul className="list-disc pl-20 mb-2">
                  <li>An electrical signal moving along nerve cell triggers the secretion of a neurotransmitter molecule carrying a chemical signal</li>
                </ul>
              </ul>
              <li className="font-bold">Long Distance, uses hormones</li>
              <ul className="list-disc pl-16 mb-2">
                <li>In animals - endocrine signaling: specialized cells release hormones, which travel via the circulatory system to other parts of the body</li>
                <li>In plants - reach distant target via plant vessels (tubes), but others move through cells or diffuse through the air as gas</li>
              </ul>
            </ul>
            <div className="flex justify-center my-6">
              <img src="/Section/4.1.1.png" alt="Cell Communication Diagram" className="max-w-[500px] max-h-[310px] bg-white" />
            </div>
          </div>
        </div>
      );
    case "4.2":
      return (
        <div>
          <div className="pb-[20px]">
            <div className="font-bold text-2xl mb-4">Stages of Signal Transduction</div>
            <ol className="list-decimal pl-8 mb-4">
              <li className="mb-2">
                <span className="font-bold">Reception</span> is the target cell’s detection of a signaling molecule coming from outside the cell.
                <ul className="list-disc pl-8 mt-2">
                  <li>Receptor Protein - located at the cell’s surface and detects a signal when the signaling molecule binds to it</li>
                  <li><span className="font-bold">Ligand</span> - a molecule that binds specifically to another molecule, usually a larger one</li>
                  <li>Binding of a ligand to a receptor causes a receptor protein to undergo a change in shape</li>
                  <li>Types of signal molecules:
                    <ul className="list-[circle] pl-8">
                      <li>Large &amp; Polar - bind to receptors on the cell’s surface which then changes shape in the cytoplasmic region</li>
                      <li>Small &amp; Nonpolar - steroids (cholesterol) and some small peptides bind to intracellular receptors (commonly then move to the nucleus to directly regulate transcription as a transcription factor)</li>
                      <li>GPCR - a signal receptor protein in the plasma membrane that responds to the binding of a signaling molecule by activating a G protein</li>
                      <ul className="list-[square] pl-8">
                        <li>Also called a G-Protein Coupled Receptor</li>
                      </ul>
                      <li>Ligand-gated ion channel - a transmembrane protein containing a pore that opens or closes as it changes shape in response to a signaling molecule (ligand) allowing or blocking the flow of specific ions; also called an ionotropic receptor</li>
                      <li>RTK - kinases become active when ligand is bound, starting phosphorylation cascade; abnormal functioning RTK is associated with breast cancer</li>
                      <ul className="list-[square] pl-8">
                        <li>Also called a receptor tyrosine kinase</li>
                      </ul>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="mb-2">
                <span className="font-bold">Transduction</span> is a step or series of steps that converts the signal to a form that can bring about a specific cellular response.
                <ul className="list-disc pl-8 mt-2">
                  <li>Benefits of multi-step transduction:
                    <ul className="list-[circle] pl-8">
                      <li>The possibility of amplifying the signal</li>
                      <li>Provides more opportunities for coordination and control than simpler systems</li>
                    </ul>
                  </li>
                  <li>Relay molecules - often proteins, molecules that relay a signal from receptor to response</li>
                  <li>Phosphorylation / Dephosphorylation
                    <ul className="list-[circle] pl-8">
                      <li>Used to regulate protein activity by adding and removing phosphate groups</li>
                      <li>Kinases - enzymes that transfer phosphate groups from ATP to a protein (add phosphates)</li>
                      <li>Phosphatases - rapidly remove phosphate groups from proteins</li>
                    </ul>
                  </li>
                  <li>Second messenger - a small, nonprotein, water-soluble molecule or ion, such as cAMP that relays a signal to a cell’s interior in response to a signaling molecule
                    <ul className="list-[circle] pl-8">
                      <li>Examples: small, nonprotein, water-soluble molecules or ions like Ca<sup>2+</sup></li>
                      <li>cAMP - a common intracellular signaling molecule (second messenger) in eukaryotic cells</li>
                      <li>Adenylyl cyclase - an enzyme embedded in the plasma membrane that converts ATP to cAMP</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="mb-2">
                The transduced signal finally triggers a specific cellular <span className="font-bold">response</span>.
                <ul className="list-disc pl-8 mt-2">
                  <li>Signaling pathways lead to the regulation of one or more cellular activities, like:
                    <ul className="list-[circle] pl-8">
                      <li>Regulation of protein synthesis (turning genes on or off)
                        <ul className="list-[square] pl-8">
                          <li>Usually by functioning as a transcription factor</li>
                        </ul>
                      </li>
                      <li>Regulation of the activity of proteins, such as membrane transport proteins or enzymes</li>
                      <li>Cytoskeletal changes (cell movement, exocytosis)</li>
                      <li>Apoptosis (programmed cell death)</li>
                    </ul>
                  </li>
                  <li>Different responses among cells
                    <ul className="list-[circle] pl-8">
                      <li>Different cell types have different combinations of receptors and of proteins in their transduction pathways</li>
                      <li>Due to differential gene expression among cell types, this allows for cells to respond to different sets of signals in different ways and fine tune their response</li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ol>
            <div className="flex justify-center my-6">
              <img src="/Section/4.2.1.jpg" alt="Signal Transduction Diagram" className="max-w-[624px] max-h-[437px]" />
            </div>
          </div>
        </div>
      );
    case "4.3":
      return (
        <div>
          <div className="pb-[20px]">
            <div className="font-bold text-2xl mb-4">Responding to Environmental Conditions</div>
            <ul className="list-disc pl-8 mb-4">
              <li>
                <span className="font-bold">Regulators</span> - an animal for which mechanisms of homeostasis moderate internal changes in a particular variable in the face of external fluctuations of that variable
              </li>
              <li>
                <span className="font-bold">Conformers</span> - an animal for which an internal condition conforms to (changes in accordance with) changes in an environmental variable
              </li>
            </ul>
            <div className="font-bold text-xl mb-2">Homeostasis</div>
            <ul className="list-disc pl-8 mb-2">
              <li>
                <span className="font-bold">Interstitial fluid</span> - the fluid filling the spaces between cells in most animals
              </li>
              <li>
                <span className="font-bold">Homeostasis</span>: the steady-state physiological condition of the body
              </li>
              <li>
                Parts of a homeostatic control system:
                <ul className="list-[circle] pl-8">
                  <li><span className="font-bold">Sensor</span> - part of the body that recognizes stimulus; alerts control center</li>
                  <li><span className="font-bold">Set point</span> - range of values for a variable</li>
                  <li><span className="font-bold">Stimulus</span> - a fluctuation of variable away from its set point</li>
                  <li>
                    <span className="font-bold">Response</span>: physiological activity which helps return the variable to the set point
                    <div className="flex justify-center my-4">
                      <img src="/Section/4.3.1.png" alt="Feedback Mechanisms" className="max-w-[366px] max-h-[329px]" />
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
            <ul className="list-disc pl-8 mb-2">
              <li>
                <span className="font-bold">Positive Feedback</span> - an increase in the change or output: the result of a reaction is amplified to make it occur more quickly
                <ul className="list-[circle] pl-8">
                  <li>Examples: childbirth, high fevers</li>
                </ul>
              </li>
              <li>
                <span className="font-bold">Negative Feedback</span> - the diminution or counteraction of an effect by its own influence on the process giving rise to it, such as when a high level of a particular hormone in the blood may inhibit further secretion of that hormone
                <ul className="list-[circle] pl-8">
                  <li>Example: temperature</li>
                </ul>
              </li>
            </ul>
            <div className="font-bold text-xl mb-2 mt-6">Thermal Regulation</div>
            <ul className="list-disc pl-8 mb-2">
              <li>
                <span className="font-bold">Endotherm</span>: can maintain a stable body temperature even in the face of large fluctuations in the environmental temperature
              </li>
              <li>
                Role of blood vessels
                <ul className="list-[circle] pl-8">
                  <li><span className="font-bold">Vasodilation</span>: the widening of a blood vessel, increasing blood flow and heat loss</li>
                  <li><span className="font-bold">Vasoconstriction</span>: the shrinking of blood vessels, reducing blood flow and heat loss</li>
                  <li><span className="font-bold">Countercurrent exchange</span> - the exchange of a substance or heat between two fluids flowing in opposite directions</li>
                </ul>
              </li>
              <li>
                <span className="font-bold">Acclimatization</span> - a physiological adjustment to environmental changes
              </li>
              <li>
                Negative Feedback Loop for Thermoregulation in Humans
                <ul className="list-[circle] pl-8">
                  <li>
                    When body temperatures drop - the control center (hypothalamus) inhibits heat loss mechanisms while activating mechanisms that either save heat (vasoconstriction of blood vessels, insulin release), or generate heat (shivering)
                  </li>
                  <li>
                    When body temperature increases - specialized neurons detect this increase and stimulate the activity of sweat glands; the evaporation of sweat from your skin then cools your body, helping return your temperature to the set point
                  </li>
                  <li>
                    <span className="font-bold">Fevers</span>: an elevated body temperature, enhancing the body’s ability to fight infection
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      );
    case "4.4":
      return (
        <div>
          <div className="pb-[20px]">
            <div className="font-bold text-2xl mb-4">Cellular Organization of the Genetic Material</div>
            <ul className="list-disc pl-8 mb-2">
              <li>Genome - all of a cell’s genetic information</li>
              <ul className="list-disc pl-8">
                <li>In prokaryotes - often a single DNA molecule</li>
                <li>In eukaryotes - a number of DNA molecules</li>
              </ul>
              <li>Chromosomes: structures of packaged DNA and proteins</li>
              <li>Chromatin: DNA and proteins, which may be condensed (heterochromatin) or loosened (euchromatin)</li>
              <li>Somatic Cells - made via mitosis and are diploid</li>
              <li>Gamete Cells (sex cells) - made via meiosis and are haploid</li>
              <li>Sister Chromatids - have all the same genes and versions of genes</li>
              <li>Homologous Chromosomes - have the same genes but potentially different versions (called alleles)</li>
              <ul className="list-disc pl-8">
                <li>Inherited from different parents</li>
                <li>Only observed in diploid (2n) cells / organisms</li>
              </ul>
            </ul>
            <div className="flex justify-center my-4">
              <img src="/Section/4.4.2.jpg" alt="The Cell Cycle" className="max-w-[300px] max-h-[340px]" />
            </div>
            <div className="font-bold text-xl mb-2">Stages of the Cell Cycle</div>
            <ul className="list-disc pl-8 mb-2">
              <li>
                <span className="font-bold">G<sub>0</sub></span> - a stage where the cell is not actively in the cell cycle; it is neither dividing nor preparing to divide
              </li>
              <li>
                <span className="font-bold">G<sub>1</sub></span> - the first gap, or growth phase, before DNA synthesis occurs
                <ul className="list-[circle] pl-8">
                  <li>Produces necessary products for division</li>
                </ul>
              </li>
              <li>
                <span className="font-bold">S Phase</span> - portion of interphase during which DNA is replicated
              </li>
              <li>
                <span className="font-bold">G<sub>2</sub></span> - the second gap, or growth phase
                <ul className="list-[circle] pl-8">
                  <li>Inspects the accumulated products to ensure that there are enough</li>
                  <li>Centrosomes first appear</li>
                </ul>
              </li>
              <li>
                <span className="font-bold">Mitosis</span>
                <ul className="list-[circle] pl-8">
                  <li>
                    <span className="font-bold">Interphase / G2</span>
                    <ul className="list-[square] pl-8">
                      <li>A nuclear envelope encloses the nucleus</li>
                      <li>One / many nucleoli are visible</li>
                      <li>Two centrosomes have formed</li>
                      <li>DNA in the form of chromatin</li>
                    </ul>
                  </li>
                  <li>
                    <span className="font-bold">Prophase</span>
                    <ul className="list-[square] pl-8">
                      <li>Chromatin condenses into discrete chromosomes (actually two identical sister chromatids)</li>
                      <li>Nuclear envelope breaks down</li>
                      <li>Microtubules form at the centromere of each chromatid and attach to <span className="font-bold">spindle fibers</span></li>
                    </ul>
                    <ul className="list-[square] pl-16">
                      <li>
                        <span className="font-bold">Spindle Fibers</span> - an assemblance of microtubules and associated proteins that is involved in the movement of chromosomes during mitosis
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span className="font-bold">Metaphase</span>
                    <ul className="list-[square] pl-8">
                      <li>The centrosomes are on opposite poles (ends) of the cell</li>
                      <li>Pairs of sister chromatids are moved onto the metaphase plate</li>
                    </ul>
                  </li>
                  <li>
                    <span className="font-bold">Anaphase</span>
                    <ul className="list-[square] pl-8">
                      <li>Cohesion proteins, which were holding the sister chromatids together, break down, making two independent chromosomes</li>
                      <li>Microtubules shorten, pulling each chromosome toward opposite ends of the cell</li>
                    </ul>
                  </li>
                  <li>
                    <span className="font-bold">Telophase</span>
                    <ul className="list-[square] pl-8">
                      <li>Two daughter nuclei form</li>
                      <li>Nucleoli reappear</li>
                      <li>The chromosome becomes less condensed</li>
                    </ul>
                  </li>
                  <li>
                    <span className="font-bold">Cytokinesis</span>
                    <ul className="list-[square] pl-8">
                      <li>Usually begins during late telophase</li>
                      <li>In animal cells - involves the formation of a cleavage furrow, which pinches the cell in two</li>
                      <li>In plant cells - vesicles derived from the golgi apparatus move along microtubules to the middle of the cell, where they coalesce, producing a cell plate</li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="flex justify-center my-4">
              <img src="/Section/4.4.1.jpg" alt="Cell Cycle" className="max-w-[450px] max-h-[140px]" />
            </div>
          </div>
        </div>
      );
    case "4.5":
      return (
        <div>
          <div className="pb-[20px]">
            <div className="font-bold text-2xl mb-4">The Cell Cycle</div>
            <ul className="list-disc pl-8 mb-2">
              <li>Cell Cycle Control System - a cyclically operating set of molecules in eukaryotic cells that both triggers and coordinates key events in the cell cycle</li>
            </ul>
            <ul className="list-disc pl-12 mb-2">
              <li>Control points called checkpoints regulate the cell cycle</li>
            </ul>
            <ul className="list-disc pl-16 mb-2">
              <li>Based on the presence of “stop” or “go-ahead” signals</li>
            </ul>
            <ul className="list-disc pl-12 mb-2">
              <li>Three important checkpoints are G<sub>1</sub>, G<sub>2</sub>, and M</li>
            </ul>
            <ul className="list-disc pl-16 mb-2">
              <li>
                G<sub>1</sub> is the restriction point because it is the most important in mammalian cells
              </li>
              <li>
                Cells that don’t go into G<sub>1</sub> may exit the cell cycle, switching to a non-dividing state called the G<sub>0</sub> phase
              </li>
              <li>
                These signals are often tied to specific events, which must occur for the cell to properly continue through the cell cycle
              </li>
            </ul>
            <ul className="list-disc pl-24 mb-2">
              <li>
                Ex: a cell cannot move past the M checkpoint unless the kinetochores of all chromosomes are attached to the spindle
              </li>
            </ul>
            <ul className="list-disc pl-12 mb-2">
              <li>Cyclins &amp; CDKs</li>
            </ul>
            <ul className="list-disc pl-16 mb-2">
              <li>Regulate the cell cycle by allowing the cell to pass through checkpoints</li>
              <li>Cyclins build up during certain cell cycle stages when the cell is properly moving through them and bind to the cyclin dependent kinases (CDKs)</li>
              <li>CDKs then move the cell past the checkpoint into the next stage of the cell cycle</li>
            </ul>
            <div className="flex justify-center my-4">
              <img src="/Section/4.5.3.jpg" alt="Control of the Cell Cycle" className="max-w-[544px] max-h-[329px]" />
            </div>
            <ul className="list-disc pl-8 mb-2">
              <li>Internal and external factors regulating the cell cycle</li>
            </ul>
            <ul className="list-disc pl-12 mb-2">
              <li>Growth Factors - a protein that must be present in the extracellular environment (culture, medium, animal body, etc.) for the growth and normal development of certain types of cells</li>
              <li>Density-dependent inhibition: phenomena observed in normal animal cells that causes them to stop dividing when they come into contact with another cell</li>
              <li>Anchorage dependence - the requirement that a cell must be attached to a substratum in order to initiate cell division</li>
            </ul>
            <div className="font-bold text-xl mb-2 mt-6">Cancer</div>
            <ul className="list-disc pl-8 mb-2">
              <li>Cancer cells fail to respond to normal cell cycle regulation signals in one of three ways</li>
            </ul>
            <ol className="list-decimal pl-12 mb-2">
              <li>They may make their own required growth factor</li>
              <li>They may have an abnormality in the signaling pathway that conveys the growth factor’s signal</li>
              <li>They may have an abnormal cell cycle control system</li>
            </ol>
            <ul className="list-disc pl-8 mb-2">
              <li>From a cancerous cell to an individual with cancer</li>
            </ul>
            <ul className="list-disc pl-12 mb-2">
              <li>One cell grows into a cancerous cell</li>
              <li>Genetic and cellular changes in the cell allow it to avoid detection by the body’s defense system</li>
              <li>
                Once these cells have spread, it means the tumor has now <span className="font-bold">metastatized</span> throughout the body
              </li>
            </ul>
            <ul className="list-disc pl-16 mb-2">
              <li>Metastasis - the spread of cancer cells from the place where they first formed to another part of the body</li>
            </ul>
            <div className="font-bold text-xl mb-2 mt-6">Genes Associated with Cancer</div>
            <ul className="list-disc pl-8 mb-2">
              <li>Oncogenes</li>
            </ul>
            <ul className="list-disc pl-12 mb-2">
              <li>Start as a normal, beneficial gene called a proto-oncogene</li>
            </ul>
            <ul className="list-disc pl-16 mb-2">
              <li>Normal function is to code for proteins that stimulate normal cell growth and division</li>
              <li>When mutated, the oncogene either makes too much of the gene product or makes a version that is somehow “stronger”</li>
              <div className="flex justify-center my-4">
                <img src="/Section/4.5.2.jpg" alt="What is a RAS Mutation?" className="max-w-[318px] max-h-[213px]" />
              </div>
            </ul>
            <ul className="list-disc pl-12 mb-2">
              <li>Mutations typically involve one of:</li>
            </ul>
            <ul className="list-disc pl-16 mb-2">
              <li>Epigenetic</li>
              <li>Movement of DNA</li>
              <li>Point mutations</li>
            </ul>
            <ul className="list-disc pl-12 mb-2">
              <li>Example: Ras</li>
            </ul>
            <ul className="list-disc pl-16 mb-2">
              <li>Involved in about 30% of cancers</li>
              <li>Normal Ras function: a G-protein that relays a signal from a growth factor receptor on the plasma membrane to a cascade of protein kinases</li>
              <li>When altered, a hyperactive Ras protein is produced that triggers the kinase cascade without a growth factor</li>
            </ul>
            <ul className="list-disc pl-8 mb-2">
              <li>Tumor Suppressor Genes</li>
            </ul>
            <ul className="list-disc pl-12 mb-2">
              <li>Normal gene functions are to slow cell division or tell the cell to apoptose</li>
              <li>Example: p53</li>
            </ul>
            <ul className="list-disc pl-16 mb-2">
              <li>Involved in about 50% of cancers</li>
              <li>Normal p53 function is to encode for a protein that is a specific transcription factor that promotes the synthesis of cell-cycle-inhibiting proteins</li>
            </ul>
            <ul className="list-disc pl-24 mb-2">
              <li>Called the “guardian of the genome”</li>
            </ul>
            <ul className="list-disc pl-16 mb-2">
              <li>When altered, p53 cannot prevent a cell from passing on through the cell cycle when it has mutations due to DNA damage</li>
            </ul>
            <div className="flex justify-center my-4">
              <img src="/Section/4.5.1.jpg" alt="Tumor Suppressor Gene" className="max-w-[624px] max-h-[352px]" />
            </div>
          </div>
        </div>
      );
    case "6.1":
      return (
        <div>
          <div className="pb-[20px]">
            <div className="font-bold text-2xl mb-4">Structure of DNA and RNA Nucleotides</div>
            <ul className="list-disc pl-8 mb-2">
              <li className="font-bold">Parts of DNA</li>
              <ul className="list-disc pl-8 mb-2">
                <li>Double helix structure (two strands)</li>
                <li>Antiparallel strands (strands run in opposite directions)</li>
                <li>Nucleotide Bonding rules</li>
                <ul className="list-disc pl-8 mb-2">
                  <li>Adenine - Thymine</li>
                  <ul className="list-disc pl-8 mb-2">
                    <li>Form 3 covalent bonds</li>
                  </ul>
                  <li>Guanine - Cytosine</li>
                  <ul className="list-disc pl-8 mb-2">
                    <li>Form 2 covalent bonds</li>
                  </ul>
                </ul>
                <li>Structure of DNA nucleotides</li>
                <ul className="list-disc pl-8 mb-2">
                  <li>1 phosphate group</li>
                  <li>1 deoxyribose sugar</li>
                  <li>1 nitrogenous base</li>
                  <ul className="list-disc pl-8 mb-2">
                    <li>Adenine</li>
                    <li>Thymine</li>
                    <li>Guanine</li>
                    <li>Cytosine</li>
                  </ul>
                </ul>
              </ul>
              <li className="font-bold">Parts of RNA</li>
              <ul className="list-disc pl-8 mb-2">
                <li>Most commonly single stranded</li>
                <li>Nucleotide Bonding rules</li>
                <ul className="list-disc pl-8 mb-2">
                  <li>Adenine - Uracil</li>
                  <ul className="list-disc pl-8 mb-2">
                    <li>Form 3 covalent bonds</li>
                  </ul>
                  <li>Guanine - Cytosine</li>
                  <ul className="list-disc pl-8 mb-2">
                    <li>Form 2 covalent bonds</li>
                  </ul>
                </ul>
                <li>Structure of RNA nucleotides</li>
                <ul className="list-disc pl-8 mb-2">
                  <li>1 phosphate group</li>
                  <li>1 ribose sugar</li>
                  <li>1 nitrogenous base</li>
                  <ul className="list-disc pl-8 mb-2">
                    <li>Adenine</li>
                    <li>Uracil</li>
                    <li>Guanine</li>
                    <li>Cytosine</li>
                  </ul>
                </ul>
              </ul>
            </ul>
            <div className="flex justify-center my-4">
              <img src="/Section/6.1.2.png" alt="Difference Between DNA and RNA" className="max-w-[320px] max-h-[224px]" />
            </div>
            <div className="font-bold text-xl mb-2">Discovery of DNA’s Structure</div>
            <ul className="list-disc pl-8 mb-2">
              <li>Rosalind Franklin (1951)
                <ul className="list-disc pl-8 mb-2">
                  <li>Studied a technique called X-ray crystallography, which shows how X-rays are diffracted (deflected) as they pass through molecules</li>
                  <li>She used X-ray crystallography to determine that DNA was helical in shape and helped with the width of the helix</li>
                  <li>Double Helix - description of the shape of DNA</li>
                </ul>
              </li>
              <li>Watson &amp; Crick (1953)
                <ul className="list-disc pl-8 mb-2">
                  <li>Modeled DNA, which had to conform to the X-ray measurements (determined by Franklin) and <span className="font-bold">Chargaff’s rule</span></li>
                  <li>Chargaff’s rule:
                    <ol className="list-decimal pl-8">
                      <li>DNA base composition varies between species</li>
                      <li>For each species, the percentages of A and T are roughly equal, as are those of C and G</li>
                    </ol>
                  </li>
                  <li>Found the structure of DNA had key elements
                  <ul className="list-disc pl-8 mb-2">
                    <li>Sugar-phosphate backbones on the outside of DNA</li>
                    <li>Antiparallel strands: two sugar phosphate backbones have strands that run in opposite directions</li>
                    <li>Nitrogenous base pairing to keep a uniform diameter; purines (Adenine &amp; Guanine) have two organic rings and always pair to pyrimidines (Thymine and Cytosine), which have one organic ring</li>
                    <li>Determined directionality of DNA to be 5’ to 3’</li>
                  </ul>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="font-bold text-xl mb-2">Works Important for Understanding DNA</div>
            <ul className="list-disc pl-8 mb-2">
              <li>Thomas Hunt Morgan (1909)
                <ul className="list-disc pl-8 mb-2">
                  <li>Showed the genes exist as part of chromosomes, which consist of DNA and proteins</li>
                  <li>Developed the <span className="font-bold">Chromosomal Theory of Inheritance</span></li>
                  <li>Genes are at specific locations on chromosomes</li>
                  <li>“Fruit fly sex guy”</li>
                </ul>
              </li>
              <li>Frederick Griffith (1928)
                <ul className="list-disc pl-8 mb-2">
                  <li>Experiment: killed pathogenic (disease-causing) bacteria with heat and mixed the cell remains with living bacteria of a non-pathogenic strain</li>
                  <li>Outcome: some non-pathogenic bacteria became pathogenic</li>
                  <li>Conclusion: a chemical component of the dead pathogenic bacteria caused a heritable change</li>
                  <div className="flex justify-center my-4">
                    <img src="/Section/6.1.1.png" alt="Tiny Transformations: Harnessing Bacterial Behavior to Cure Disease" className="max-w-[366px] max-h-[206px]" />
                  </div>
                  <li><span className="font-bold">Transformation</span>: a change in the genes / physical traits of an organism due to its cells taking up external DNA</li>
                </ul>
              </li>
              <li>Alfred Hershey &amp; Martha Chase (1952)
                <ul className="list-disc pl-8 mb-2">
                  <li>Experiment: used a radioactive isotope of sulfur to tag protein in one batch of the phage T<sup>2</sup> and another radioactive isotope of phosphorus to tag DNA in a second batch</li>
                  <li>Results:</li>
                  <ul className="list-disc pl-8 mb-2">
                    <li>Phage DNA entered bacterial cells, but phage proteins did not enter DNA</li>
                    <li>DNA, not proteins, functions as the genetic material of phage T<sup>2</sup></li>
                  </ul>
                </ul>
              </li>
            </ul>
            <div className="flex justify-center my-4">
              <img src="/Section/6.1.3.png" alt="Hershey Chase Experiment" className="max-w-[624px] max-h-[156px]" />
            </div>
          </div>
        </div>
      );
    case "6.2":
      return (
        <div>
          <div className="pb-[20px]">
            <div className="font-bold text-2xl mb-4">Semiconservative model</div>
            <div className="flex justify-center my-4">
              <img
                src="/Section/6.2.1.png"
                alt="Mode of DNA replication: Meselson-Stahl experiment"
                className="max-w-[290px] max-h-[170px]"
              />
            </div>
            <ul className="list-disc pl-8 mb-2">
              <li>
                <span className="font-bold">Meselson &amp; Stahl</span>
                <ul className="list-disc pl-8 mb-2">
                  <li>
                    Experiment: cultured E. coli in <sup>15</sup>N (the heavy isotope) and <sup>14</sup>N (the lighter isotope)
                  </li>
                  <li>
                    Results: DNA broke into two strands, but otherwise did not break apart
                  </li>
                  <li>Gen 1</li>
                  <ul className="list-disc pl-8 mb-2">
                    <li>Only 1 molecule was present and contained 2 heavy strands</li>
                  </ul>
                  <li>Gen 2</li>
                  <ul className="list-disc pl-8 mb-2">
                    <li>Two molecules are present each containing 1 heavy and 1 light strand</li>
                  </ul>
                  <li>Gen 3</li>
                  <ul className="list-disc pl-8 mb-2">
                    <li>Two molecules have only light strands and two molecules still have half light and half heavy strands</li>
                  </ul>
                  <li>Gen 4</li>
                  <ul className="list-disc pl-8 mb-2">
                    <li>
                      The percentage of orange strands increases as there is now 6 fully light molecules, while still there is 2 only half light molecules
                    </li>
                  </ul>
                </ul>
              </li>
            </ul>
            <div className="font-bold text-xl mb-2 mt-6">DNA replication</div>
            <ul className="list-disc pl-8 mb-2">
              <li>
                <span className="font-bold">Origin of Replication</span> - the site where the replication of chromosomal DNA begins
              </li>
              <li>
                Results in a replication fork
                <div className="flex justify-center my-4">
                  <img
                    src="/Section/6.2.3.png"
                    alt="Difference Between Eukaryotic and Prokaryotic DNA replication"
                    className="max-w-[320px] max-h-[180px]"
                  />
                </div>
              </li>
              <li>
                In Eukaryotes:
                <ul className="list-disc pl-8 mb-2">
                  <li>Chromosome may have hundred or even thousands of replication origins</li>
                </ul>
              </li>
              <li>
                In Prokaryotes:
                <ul className="list-disc pl-8 mb-2">
                  <li>Chromosome is circular and has a single origin</li>
                </ul>
              </li>
              <li>
                The space between each of the new strands of DNA is called a replication bubble
              </li>
              <li>
                <span className="font-bold">Note:</span> from the origin of replication, DNA replication is done in both directions, leading to two replication forks
              </li>
            </ul>
            <div className="font-bold text-xl mb-2 mt-6">Enzymes of Replication</div>
            <ul className="list-disc pl-8 mb-2">
              <li>Helicase - untwists the double helix of DNA at the replication fork</li>
              <li>Topoisomerase - breaks, swivels, and rejoins DNA strands; relieves tension ahead of the replication fork</li>
              <li>Primase - joins RNA nucleotides to make a primer for DNA polymerase to build off of and replace with DNA nucleotides</li>
              <li>DNA Polymerase - catalyzes the synthesis of new DNA by adding nucleotides to the 3’ end
                <ul className="list-disc pl-8 mb-2">
                  <li>Usually require a primer and a DNA template strand</li>
                </ul>
              </li>
              <li>DNA Ligase - catalyzes covalent bonding of the 3’ end of one DNA fragment to the 5’ end of another</li>
            </ul>
            <div className="font-bold text-xl mb-2 mt-6">SSB Proteins</div>
            <ul className="list-disc pl-8 mb-2">
              <li>Single stranded binding proteins</li>
              <li>Prevent the DNA from coming back together after being split by helicase</li>
            </ul>
            <div className="font-bold text-xl mb-2 mt-6">Leading and Lagging Strands</div>
            <div className="flex justify-center my-4">
              <img
                src="/Section/6.2.2.jpg"
                alt="Dna Replication"
                className="max-w-[420px] max-h-[280px]"
              />
            </div>
            <ul className="list-disc pl-8 mb-2">
              <li>
                Form as a result of DNA polymerase only being able to build in the 5’ to 3’ direction
              </li>
              <li>
                Means that one polymerase is building (adding nucleotides) in the same direction as the helicase is unwinding, while the other is building in the opposite direction
                <ul className="list-disc pl-8 mb-2">
                  <li>
                    Results in Okazaki Fragments - segments of non-connected DNA formed as a result of the discontinuous synthesis on the lagging strand
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      );
    case "6.3":
      return (
        <div>
          <div className="pb-[20px]">
            <div className="font-bold text-2xl mb-4">Steps of Transcription</div>
            <ol className="list-decimal pl-8 mb-2">
              <li className="mb-2 font-bold">Initiation</li>
            </ol>
            <ul className="list-disc pl-12 mb-2">
              <li>A transcription initiation complex forms, made of:</li>
            </ul>
            <ul className="list-disc pl-16 mb-2">
              <li>The DNA promoter, which includes a sequence called the start point</li>
              <li>Transcription factors: regulatory proteins that bind to DNA and affect transcription of certain genes</li>
            </ul>
            <ol className="list-decimal pl-8 mb-2" start={2}>
              <li className="mb-2 font-bold">Elongation</li>
            </ol>
            <ul className="list-disc pl-12 mb-2">
              <li>RNA moves along the template strand of DNA</li>
            </ul>
            <ul className="list-disc pl-16 mb-2">
              <li>Untwists the double helix</li>
              <li>Adds nucleotides to the 3’ end of RNA</li>
            </ul>
            <div className="flex justify-center my-4">
              <img src="/Section/6.3.1.png" alt="Transcription diagram" className="max-w-[624px] max-h-[248px]" />
            </div>
            <ol className="list-decimal pl-8 mb-2" start={3}>
              <li className="mb-2 font-bold">Termination</li>
            </ol>
            <ul className="list-disc pl-12 mb-2">
              <li>In bacteria, a terminator is transcribed</li>
              <li>In eukaryotes, a polyadenylation signal sequence is transcribed</li>
            </ul>
            <ul className="list-disc pl-16 mb-2">
              <li>
                Causes <span className="font-bold">mRNA</span> (messenger RNA) to be cut from polymerase and released
              </li>
            </ul>
            <ul className="list-disc pl-24 mb-2">
              <li>mRNA - a single stranded RNA copy of the coding strand of DNA produced during transcription</li>
            </ul>
            <ul className="list-disc pl-12 mb-2">
              <li>mRNA, DNA, and RNA polymerase separate</li>
            </ul>
            <div className="font-bold text-xl mb-2 mt-8">RNA Modification</div>
            <ul className="list-disc pl-8 mb-2">
              <li className="font-bold">5’ Cap</li>
            </ul>
            <ul className="list-disc pl-12 mb-2">
              <li>Modified form of guanine added to the 5’ end after 20-40 nucleotides are transcribed</li>
              <li>Facilitates the export of mature mRNA from the nucleus and protects mRNA from degradation</li>
            </ul>
            <ul className="list-disc pl-8 mb-2">
              <li className="font-bold">Poly-A-Tail</li>
            </ul>
            <ul className="list-disc pl-12 mb-2">
              <li>A sequence of 50-250 adenine nucleotides added onto the 3’ end of a pre-mRNA molecule</li>
              <li>Helps ribosomes attach to the 5’ end of the mRNA once it reaches the cytoplasm</li>
            </ul>
            <ul className="list-disc pl-8 mb-2">
              <li className="font-bold">Introns</li>
            </ul>
            <ul className="list-disc pl-12 mb-2">
              <li>Noncoding segments of nucleic acid (intervening sequence) that lie between coding regions</li>
              <li>Allow a single gene to encode more than 1 polypeptide</li>
            </ul>
            <ul className="list-disc pl-8 mb-2">
              <li className="font-bold">Alternative Splicing</li>
            </ul>
            <ul className="list-disc pl-12 mb-2">
              <li>
                A type of eukaryotic gene regulation at the RNA processing level in which different mRNA molecules are produced from the same primary transcript depending on which RNA segments are treated as exons (coding) and introns (noncoding)
              </li>
              <li>
                Allows different protein products of an organism to be much higher than the number of its genes
              </li>
            </ul>
            <div className="flex justify-center my-4">
              <img src="/Section/6.3.2.png" alt="RNA Modification and Splicing" className="max-w-[624px] max-h-[350px]" />
            </div>
            <div className="font-bold text-xl mb-2 mt-8">Location</div>
            <ul className="list-disc pl-8 mb-2">
              <li>Occurs in the cytoplasm of prokaryotes</li>
              <li>Occurs in the nucleus of eukaryotes</li>
            </ul>
          </div>
        </div>
      );
    case "6.4":
      return (
        <div>
          <div className="pb-[20px]">
            <div className="font-bold text-2xl mb-4">Steps of Translation</div>
            <ol className="list-decimal pl-8 mb-2">
              <li className="mb-2 font-bold">Initiation</li>
            </ol>
            <ul className="list-disc pl-12 mb-2">
              <li>The small ribosomal subunit binds to the 5’ cap of mRNA and moves until it reaches the start codon (AUG)</li>
              <li>Initiator tRNA binds, carrying the amino acid methionine (met)</li>
              <li>The large ribosomal subunit binds, completing the translation initiation complex</li>
            </ul>
            <ol className="list-decimal pl-8 mb-2" start={2}>
              <li className="mb-2 font-bold">Elongation</li>
            </ol>
            <ul className="list-disc pl-12 mb-2">
              <li>Ribosome moves along mRNA from 5’ to 3’</li>
              <li>New tRNA molecules bind to the codon on mRNA</li>
              <li>Catalytic activity on ribosomes forms peptide bonds between existing polypeptide and new amino acid, from N- to C- terminus</li>
              <li>tRNA leaves the ribosome</li>
            </ul>
            <ol className="list-decimal pl-8 mb-2" start={3}>
              <li className="mb-2 font-bold">Termination</li>
            </ol>
            <ul className="list-disc pl-12 mb-2">
              <li>Ribosome reaches a stop codon</li>
              <li>A release factor binds to the mRNA in the A site</li>
              <li>Ribosomal subunits, tRNAs, mRNAs, and polypeptide all separate</li>
            </ul>
            <div className="font-bold text-xl mb-4 mt-8">Function of tRNA (transfer RNA)</div>
            <ul className="list-disc pl-8 mb-2">
              <li>“Reads” the codons on mRNA and transfers amino acids to the ribosome to be added to the polypeptide</li>
              <li>Structure</li>
            </ul>
            <ul className="list-disc pl-12 mb-2">
              <li>1 RNA strand (only ~80 nucleotides long)</li>
              <li>At one end: has an amino acid which makes it possible for tRNA to enable translation of an mRNA codon into an amino acid</li>
              <li>At the other end: a nucleotide triplet that can base pair with the complementary codon on mRNA (anticodon)</li>
            </ul>
            <ul className="list-disc pl-8 mb-2">
              <li>
                Aminoacyl tRNA Synthetase - an enzyme that joins each amino acid to the appropriate tRNA
                <ul className="list-disc pl-8 mb-2">
                  <li>“Charges” the tRNA</li>
                  <li>20 different aminoacyl tRNA synthetases, one for each amino acid</li>
                  <li>Charged tRNA: tRNA to which its cognate amino acid is chemically bonded</li>
                </ul>
              </li>
              <li>
                Wobble - flexibility in the base-pairing rules in which the nucleotide at the 5’ end of a tRNA anticodon can form hydrogen bonds with more than one kind of base in the third position (3’ end) of a codon
              </li>
            </ul>
            <div className="font-bold text-xl mb-4 mt-8">mRNA codons and genetic code</div>
            <ul className="list-disc pl-8 mb-2">
              <li>Triplets, universal, redundant</li>
            </ul>
          </div>
        </div>
      );
    case "6.5-6.6":
      return (
        <div>
          <div className="pb-[20px]">
            <div className="font-bold text-2xl mb-4">Prokaryotes Gene Expression Regulation</div>
            <ul className="list-disc pl-8 mb-2">
              <li>Control of Metabolic Pathways
                <ul className="list-disc pl-8 mb-2">
                  <li>Feedback Inhibition
                    <ul className="list-disc pl-8 mb-2">
                      <li>Typical of anabolic (biosynthetic) pathways allows a cell to adapt to short-term fluctuations in the supply of a substance it needs</li>
                    </ul>
                  </li>
                  <li>Genetic Mechanisms
                    <ul className="list-disc pl-8 mb-2">
                      <li>They can regulate the expression of the genes encoding the enzymes</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>Coordinate Control
                <ul className="list-disc pl-8 mb-2">
                  <li>Genes with related functions are clustered together; therefore, making it easier to “turn them off or on”</li>
                </ul>
              </li>
              <li>Operons
                <ul className="list-disc pl-8 mb-2">
                  <li>Parts of an operon
                    <ul className="list-disc pl-8 mb-2">
                      <li>A transcription unit, which has:
                        <ul className="list-disc pl-8 mb-2">
                          <li>Genes, which are often enzymes involved in the same metabolic pathway</li>
                          <li>Promotor - acts as the binding site for the repressor</li>
                        </ul>
                      </li>
                      <li>Operator - acts as an on-off switch for the transcription unit</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>Negative Control of Operons
                <ul className="list-disc pl-8 mb-2">
                  <li>Repressible Operons
                    <ul className="list-disc pl-8 mb-2">
                      <li>Repressor is natively inactive</li>
                      <li><span className="font-bold">Gene will be expressed</span></li>
                      <li>The presence of a corepressor will activate the repressor, thus turning off the genes</li>
                      <li>Example: trp operon
                        <ul className="list-disc pl-8 mb-2">
                          <li>Tryptophan is an amino acid that is necessary for the cell</li>
                        </ul>
                      </li>
                      <li>
                        <span className="block ml-8">
                          +trp: building more trp isn’t needed; trp is a corepressor
                        </span>
                        <span className="block ml-8">
                          -trp: cell must make more trp; operon is on
                        </span>
                      </li>
                      <li>Repressible enzymes are more common in anabolic pathways; the products repress the production of more product</li>
                    </ul>
                  </li>
                  <li>Operons (lac = inducible, trp = repressible)</li>
                  <li>Regulatory genes, repressors, inducers</li>
                </ul>
              </li>
            </ul>
            <div className="flex justify-center my-4">
              <img src="/Section/6.5-6.2.png" alt="The trp operon" className="max-w-[574px] max-h-[197px] bg-white" />
            </div>
            <div className="mt-2 mb-2">
              The presence of tryptophan acts as a corepressor, enabling the red protein to bind to the operator, preventing the binding of RNA polymerase and therefore turning the gene off
            </div>
            <ul className="list-disc pl-8 mb-2">
              <li>Inducible Operons
                <ul className="list-disc pl-8 mb-2">
                  <li>Repressor is natively active</li>
                  <li>Gene won’t be expressed</li>
                  <li>Presence of an inducer will deactivate the repressor and thus turn the genes on</li>
                  <li>Example: lac operon
                    <ul className="list-disc pl-8 mb-2">
                      <li>Lactose is a disaccharide which can be broken down into glucose</li>
                    </ul>
                  </li>
                  <li>
                    <span className="block ml-8">
                      +lac: cell must make enzymes to break lactose down; operon on
                    </span>
                    <span className="block ml-8">
                      -lac: no lactose present so no enzymes are produced
                    </span>
                  </li>
                  <li>Inducible enzymes are more common in catabolic pathways; presence of the substrate induces the production of enzymes</li>
                </ul>
              </li>
            </ul>
            <div className="flex justify-center my-4">
              <img src="/Section/6.5-6.1.jpg" alt="Gene Regulation: Operon Theory" className="max-w-[614px] max-h-[471px]" />
            </div>
            <ul className="list-disc pl-8 mb-2">
              <li>Positive Control of Operons
                <ul className="list-disc pl-8 mb-2">
                  <li>Activator is natively inactive</li>
                  <li>Gene expressed at low levels</li>
                  <li>Binding of an activator to another molecule can increase activator activity</li>
                  <li>One such molecule is cAMP, which is present when glucose is scarce</li>
                  <li>Example: lac operon
                    <ul className="list-disc pl-8 mb-2">
                      <li>cAMP binds to the activator to increase the lac operon activity</li>
                    </ul>
                  </li>
                  <li>
                    <span className="block ml-8">
                      +glu; +lac: CRP detaches from the operon, transcription proceeds slower
                    </span>
                    <span className="block ml-8">
                      -glu; +lac: more cAMP so more CRP so faster transcription
                    </span>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="flex justify-center my-4">
              <img src="/Section/6.5-6.3.png" alt="lac operon positive control" className="max-w-[442px] max-h-[283px]" />
            </div>
            <div className="font-bold text-xl mb-2 mt-6">Differential Gene Expression</div>
            <ul className="list-disc pl-8 mb-2">
              <li>The expression of different sets of genes by cells with the same genome</li>
              <li>Most commonly controlled during transcription because regulation at this stage often occurs in response to signals coming from outside the cell, such as hormones or other signaling molecules</li>
            </ul>
            <div className="font-bold text-xl mb-2 mt-6">Chromatin Structure &amp; Epigenetics</div>
            <ul className="list-disc pl-8 mb-2">
              <li>Location of nucleosome along the gene’s promoter or how the promoter attaches to the structural proteins of the chromosome</li>
              <li>How condensed the chromatin is:
                <ul className="list-disc pl-8 mb-2">
                  <li>More condensed (heterochromatin) = no gene expression</li>
                  <li>Histone acetylation opens up the chromatin structure to increase gene expression</li>
                  <li>Addition of methyl groups increases how condensed the chromatin is</li>
                </ul>
              </li>
              <li>DNA methylation
                <ul className="list-disc pl-8 mb-2">
                  <li>More methylation correlates with silenced genes or even whole segments of chromosomes</li>
                  <li>Methylation patterns can be passed on to replicated DNA, this is passed on when an individual's cells divide</li>
                </ul>
              </li>
              <li>Epigenetic Inheritance - inheritance of traits transmitted by mechanisms not involving the nucleotide sequence itself</li>
              <li>Importance / Relevance: allows for cell specialization: parent cell has whole genome; daughter cells only have what they are specialized for</li>
            </ul>
            <div className="font-bold text-xl mb-2 mt-6">Post Transcriptional Regulation</div>
            <ul className="list-disc pl-8 mb-2">
              <li>Alternative RNA splicing - a type of eukaryotic gene regulation at the RNA processing level in which different mRNA molecules are produced from the same primary transcript, depending on which RNA segments are treated as exons (coding) and introns (intervening sequences)</li>
            </ul>
          </div>
        </div>
      );
    case "6.7":
      return (
        <div>
          <div className="pb-[20px]">
            <div className="font-bold text-2xl mb-4">Mutations</div>
            <ul className="list-disc pl-8 mb-2">
              <li>A change in the nucleotide sequence of an organism’s DNA or in the DNA/RNA of a virus</li>
            </ul>
            <ul className="list-disc pl-12 mb-2">
              <li>Ultimate source of new genes</li>
              <li>Mutations can be passed if it arises in a gamete or a cell that gives rise to gametes</li>
            </ul>
            <ul className="list-disc pl-8 mb-2">
              <li>When mutations are harmful, they are called genetic disorders</li>
            </ul>
            <div className="font-bold text-xl mt-6 mb-2">Types of Mutations</div>
            <ul className="list-disc pl-8 mb-2">
              <li>
                <span className="font-bold">Point Mutation</span> - a change in a single nucleotide pair of a gene
                <ul className="list-disc pl-8 mb-2">
                  <li>
                    <span className="font-bold">Silent</span> - a nucleotide-pair substitution that has no observable effect on the phenotype
                    <ul className="list-disc pl-8 mb-2">
                      <li>This can happen because of redundancy in the genetic code</li>
                      <li>Result on phenotype / protein - has no effect on phenotype or protein</li>
                    </ul>
                  </li>
                  <li>
                    <span className="font-bold">Missense</span> - a nucleotide-pair substitution that results in a codon that codes for a different amino acid
                    <div className="flex justify-center my-4">
                      <img src="/Section/6.7.1.png" alt="Point mutations - Labster" className="max-w-[336px] max-h-[278px]" />
                    </div>
                    <ul className="list-disc pl-8 mb-2">
                      <li>Result on phenotype / protein - may have little effect on the protein but does not change the phenotype</li>
                      <li>Most common type of substitution mutation</li>
                    </ul>
                  </li>
                  <li>
                    <span className="font-bold">Nonsense</span>
                    <ul className="list-disc pl-8 mb-2">
                      <li>A mutation that changes an amino acid codon to one of the three stop codons, resulting in a shorter and usually nonfunctional protein</li>
                      <li>Result on phenotype / protein - protein becomes non-functional and affects phenotype</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <span className="font-bold">Frameshift Mutations</span> - a mutation occurring when nucleotides are inserted in or deleted from a gene and the number deleted is not a multiple of three (because of triplet code, deleting 3 nucleotides would only result in a missing amino acid—no frameshift)
                <ul className="list-disc pl-8 mb-2">
                  <li>
                    <span className="font-bold">Insertions and Deletions</span> - additions or losses of nucleotide pairs in a gene
                    <ul className="list-disc pl-8 mb-2">
                      <li>Result on phenotype / protein - certainly non-functional proteins and significantly affects the phenotype</li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="flex justify-center my-4">
              <img src="/Section/6.7.2.png" alt="What are different types of mutations?" className="max-w-[409px] max-h-[278px] bg-white" />
            </div>
            <div className="font-bold text-xl mt-6 mb-2">Origin of Mutations</div>
            <ul className="list-disc pl-8 mb-2">
              <li>Mutations can arise during DNA replication</li>
            </ul>
            <ul className="list-disc pl-12 mb-2">
              <li>These are called spontaneous mutations</li>
              <li>
                Estimated to happen in one of every 10
                <sup>10</sup>
                nucleotides
              </li>
            </ul>
            <ul className="list-disc pl-8 mb-2">
              <li>
                Mutations can also arise when DNA interacts with certain <span className="font-bold">mutagens</span>
              </li>
            </ul>
            <ul className="list-disc pl-12 mb-2">
              <li>
                <span className="font-bold">Mutagen</span> - chemical or physical agents that interact with DNA and can cause a mutation
                <ul className="list-disc pl-8 mb-2">
                  <li>Physical Agents: mutagenic radiation - UV light that disrupts thymine dimers in DNA</li>
                  <li>Chemical Agents: often carcinogens (cancer-causing)</li>
                </ul>
              </li>
            </ul>
            <div className="font-bold text-xl mt-6 mb-2">Chromosomal mutations</div>
            <div className="pl-8">Duplications, inversion, deletion, translocation</div>
          </div>
        </div>
      );
    case "6.8":
      return (
        <div>
          <div className="pb-[20px]">
            <div className="font-bold text-2xl mb-4">Genetic Engineering</div>
            <div className="mb-2">The direct manipulation of genes for practical purposes</div>
            <div className="font-bold text-xl mt-6 mb-2">DNA Cloning</div>
            <ul className="list-disc pl-8 mb-2">
              <li>The production of multiple copies of a specific DNA segment</li>
            </ul>
            <ul className="list-disc pl-12 mb-2">
              <li>Often uses plasmids, the “accessory” DNA molecule found in bacteria</li>
              <li>Foreign DNA is then inserted into plasmid DNA</li>
              <li>Results in a recombinant DNA molecule, which can then be reinserted into a bacterial cell, which then divides with its plasmid</li>
            </ul>
            <ul className="list-disc pl-8 mb-2">
              <li>
                Restriction Enzymes
                <div className="flex justify-center my-4">
                  <img src="/Section/6.8.1.png" alt="Overview: DNA cloning (article) | Khan Academy" className="max-w-[262px] max-h-[175px] bg-white" />
                </div>
              </li>
            </ul>
            <ul className="list-disc pl-12 mb-2">
              <li>An endonuclease that recognizes and cuts DNA molecules foreign to a bacteria (such as phage genomes)</li>
              <li>Natural purpose is to protect the bacterial cell by cutting up foreign DNA from other organisms or phages</li>
              <li>Each restriction enzyme works at a specific restriction site, which is a short, often symmetrical, sequence of nucleotides</li>
            </ul>
            <ul className="list-disc pl-16 mb-2">
              <li>Example: HindIII recognizes 5’ - A A G C T T - 3’</li>
              <li>Results in a set of restriction fragments</li>
            </ul>
            <ul className="list-disc pl-12 mb-2">
              <li>Process of making a recombinant bacterial culture</li>
            </ul>
            <ol className="list-decimal pl-16 mb-2">
              <li>Find an appropriate restriction enzyme</li>
            </ol>
            <ul className="list-disc pl-24 mb-2">
              <li>It must cut the plasmid DNA</li>
            </ul>
            <ol className="list-decimal pl-16 mb-2" start={2}>
              <li>Combine the plasmid and the gene of interest</li>
              <li>Use DNA ligase to anneal the sticky ends</li>
              <li>Transform bacteria</li>
            </ol>
            <ul className="list-disc pl-24 mb-2">
              <li>Culture bacteria then make them competent - able to take up the plasmid - often by heat shocking the culture</li>
            </ul>
            <ol className="list-decimal pl-16 mb-2" start={5}>
              <li>Check to ensure the bacterium is expressing the gene of interest</li>
            </ol>
            <ul className="list-disc pl-24 mb-2">
              <li>Plasmids often have a gene for antibiotic resistance so that only transformed bacteria can grow on petri dish containing antibiotics</li>
            </ul>
            <ol className="list-decimal pl-16 mb-2" start={6}>
              <li>Isolate and purify either the gene or the gene product</li>
            </ol>
            <div className="font-bold text-xl mt-6 mb-2">Gel Electrophoresis</div>
            <ul className="list-disc pl-8 mb-2">
              <li>Used for checking and comparing fragments of DNA of different lengths</li>
              <li>Process</li>
            </ul>
            <ol className="list-decimal pl-12 mb-2">
              <li>DNA sample is mixed with restriction enzymes, making fragments</li>
              <li>
                Sample is placed into a well at one end of a slab of agarose gel
                <div className="flex justify-center my-4">
                  <img src="/Section/6.8.2.png" alt="What is gel electrophoresis?" className="max-w-[269px] max-h-[220px] bg-white" />
                </div>
              </li>
              <li>An electrical current is applied to the gel</li>
            </ol>
            <ul className="list-disc pl-16 mb-2">
              <li>DNA is negatively charged and therefore attracts to move towards the electrode</li>
              <li>Shorter molecules are slowed down less, thus move faster through the gel</li>
            </ul>
            <ol className="list-decimal pl-12 mb-2" start={4}>
              <li>DNA binding dye is added so that each band of DNA is visible</li>
            </ol>
            <ul className="list-disc pl-8 mb-2">
              <li>Uses of Gel Electrophoresis</li>
            </ul>
            <ul className="list-disc pl-12 mb-2">
              <li>Verify the plasmid took up the gene of interest</li>
              <li>Isolating genes</li>
              <li>Comparing DNA</li>
            </ul>
            <ul className="list-disc pl-16 mb-2">
              <li>Ex: looking for DNA matches (forensics, paternity)</li>
            </ul>
            <div className="font-bold text-xl mt-6 mb-2">Polymerase Chain Reaction</div>
            <ul className="list-disc pl-8 mb-2">
              <li>
                Amplifies specific genes, makes billions of copies within hours
                <div className="flex justify-center my-4">
                  <img src="/Section/6.8.3.png" alt="Polymerase chain reaction (PCR) (article) | Khan Academy" className="max-w-[369px] max-h-[169px] bg-white" />
                </div>
              </li>
              <li>Process</li>
            </ul>
            <ol className="list-decimal pl-12 mb-2">
              <li>DNA, RNA primers, DNA nucleotides, and enzymes are combined</li>
              <li>The conical tube of materials is cycled through three steps; each doubling the amount of the target sequence present</li>
            </ol>
            <ol className="list-decimal pl-16 mb-2">
              <li>Denaturation: DNA is heated to separate the strands</li>
              <li>Annealing: DNA is cooled so that the primers can bond to the ends of the target sequence</li>
              <li>Extension: DNA polymerase builds onto the primers</li>
            </ol>
            <ol className="list-decimal pl-24 mb-2">
              <li>A special polymerase called Taq polymerase is used, which can withstand heating without denaturing</li>
            </ol>
          </div>
        </div>
      );
  }
}

export function SectionDates({children}: {children: string}) {
  switch(children) {
    case "2.1":
    case "2.2":
    case "2.3":
    case "2.4":
    case "2.5":
    case "2.6":
    case "2.7":
    case "4.1":
    case "4.2":
    case "4.3":
    case "4.4":
    case "4.5":
    case "6.1":
    case "6.2":
    case "6.3":
    case "6.4":
    case "6.5-6.6":
    case "6.7":
    case "6.8":
      return "22/5/2025";
  }
}
