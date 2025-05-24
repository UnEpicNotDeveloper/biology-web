/*import React, { useState } from "react";
import Image from "next/image";

const questionData = {
  unit2_1: {
    sectionA: [
      {
        id: '2.1.1',
        question: "Which of the following best explains the significance of the Miller-Urey experiment in understanding the origin of life?",
        options: [
          "A. It proved that all life originated from RNA-based protocells",
          "B. It demonstrated that complex macromolecules could form spontaneously in any environment",
          "C. It provided evidence that organic molecules could form in an early Earth-like atmosphere",
          "D.  It isolated the first living organism from inorganic compounds"
        ],
        answer: "C. It provided evidence that organic molecules could form in an early Earth-like atmosphere",
        explanation: "The Miller-Urey experiment simulated early Earth atmospheric conditions and showed that amino acids and other organic molecules could form abiotically, supporting the hypothesis that life could have originated from such conditions."
      },
      {
        id: '2.1.2',
        question: "Which of the following characteristics distinguishes a protocell from other non living structures?",
        options: ["A. Ability to perform binary fission", 
                    "B. Possession of membrane-bound nucleus", 
                    "C. Maintenance of an internal chemical environment different from its surroundings", 
                    "D. Containment of DNA for self-replication"],
           answer: "C. Maintenance of an internal chemical environment different from its surroundings",
           explanation: "A protocell is an abiotic structure that has a membrane structure and maintains an internal chemistry different from that of its surroundings."
      },
      {
        id: '2.1.3',
        question: "Which feature of RNA supports the RNA World Hypothesis",
        options: ["A. RNA can only serve as a passive template for DNA transcription", 
                    "B. RNA can catalyze reactions like an enzyme, unlike DNA", 
                    "C. RNA is more stable than DNA in modern organisms", 
                    "D. RNA cannot form secondary structures dur to its simplicity"],
           answer: "B. RNA can catalyze reactions like an enzyme, unlike DNA",
           explanation: "RNA is capable of catalyzing reactions as ribozymes, which cannot be done by DNA."
      },
      {
        id: '2.1.4',
        question: "The length of the hyphae mushroom appears to be 5.4 mm when viewed under a microscope that has a 3x ocular lens and 15x objective lens. What is the actual size of the hyphae in micrometers?",
        options: ["A. 120 micrometers", 
                    "B. 360 micrometers", 
                    "C. 5,400 micrometers", 
                    "D. 1,800 micrometers"],
           answer: "A. 120 micrometers",
           explanation: "5.4 millimeters / 45 (total magnification = 3 x 15) = 0.12 millimeters = 120 micrometers"
      },
      {
        id: '2.1.5',
        question: "Which of the following statements correctly distinguishes between SEM and TEM?",
        options: ["A. SEM provides higher resolution and is used for internal structure", 
                    "B. TEM provinces 3D imaging and surface topography", 
                    "C. SEM is ideal for observing cell ultrastructure at the molecular level", 
                    "D. SEM shows surface structures in 3D, while TEM shows thin internal slices"],
           answer: "D. SEM shows surface structures in 3D, while TEM shows thin internal slices",
           explanation: "SEM scans the surface and produces 3D images of topography by coating a specimen with metal atoms; TEM passes electrons through the sections and reveals detailed internal structures"
      },
    ]
  },
  unit2_2: {
    sectionA: [
      {
        id: '2.2.1',
        question: "Researchers conducted an experiment to investigate the effects of a valinomycin treatment on skeletal muscle cells. Valinomycin is a naturally occurring substance that can be used as a drug. The results of the experiment are presented in the table. Which of the following claims about the effects of the valinomycin treatment is best supported by the data presented in the table",
        image: "/MCQ/2.2.1.png", 
        options: ["A. The valinomycin treatment caused an increase in the activity of the rough endoplasmic reticulum.", 
                    "B. The valinomycin treatment caused an increase in the activity of the Golgi complex.", 
                    "C. The valinomycin treatment caused a decrease in the activity of the lysosome.", 
                    "D. The valinomycin treatment caused a decrease in the activity of the mitochondria."],
        answer: "D. The valinomycin treatment caused a decrease in the activity of the mitochondria.",
        explanation: "The data indicate that the valinomycin treatment caused a decrease in the relative rate of ATP production, which likely resulted from impaired mitochondrial function."
      },
      {
         id: '2.2.2',
         question: "Which of the following characteristics distinguishes a protocell from other non living structures?",
         image: "/MCQ/2.2.2.png", 
         options: ["A. Ability to perform binary fission", 
                    "B. Possession of membrane-bound nucleus", 
                    "C. Maintenance of an internal chemical environment different from its surroundings", 
                    "D. Containment of DNA for self-replication"],
         answer: "C. Maintenance of an internal chemical environment different from its surroundings",
         explanation: "A protocell is an abiotic structure that has a membrane structure and maintains an internal chemistry different from that of its surroundings."
      },
      {
        id: '2.2.3',
        question: "In an experiment, researchers compared the growth of two different plants, plant X and plant Y. The researchers maintained the plants under nearly identical conditions and observed that plant X grew faster than plant Y. The researchers also observed that the inner mitochondrial membranes of plant X had more folds than did those of plant Y. Which of the following conclusions about increasing the number of folds in the inner mitochondrial membrane is best supported by the results of the experiment?",
        options: ["A. It increases the efficiency of photosynthesis, which results in faster cell growth.", 
                    "B. It increases the surface area available for ATP production, which results in faster cell growth.", 
                    "C. It increases the amount of space available for storing cellular wastes, which results in faster cell growth.", 
                    "D. It increases the rate of protein transport to the plasma membrane, which results in faster cell growth."],
        answer: "B. It increases the surface area available for ATP production, which results in faster cell growth.",
        explanation: "The increased surface area of the folds will contain more ATP synthase, allowing for more efficient use of the chemiosmotic gradient and more efficient production of ATP. The observation that plant X grew faster than plant Y supports this conclusion."
      },
      {
        id: '2.2.4',
        question: "The length of the hyphae mushroom appears to be 5.4 mm when viewed under a microscope that has a 3x ocular lens and 15x objective lens. What is the actual size of the hyphae in micrometers?",
        options: ["A. A lack of lysosomes will cause a decrease in the synthesis of enzymes necessary for cellular respiration.", 
                    "B. Fewer lysosomes will be available to break down macromolecules to provide the necessary nutrients for cellular respiration.", 
                    "C. Fewer lysosomes will be available to store materials required for the functioning of the mitochondria.", 
                    "D. Lysosomes will not be available to modify proteins so that they are targeted to the mitochondria."],
        answer: "B. Fewer lysosomes will be available to break down macromolecules to provide the necessary nutrients for cellular respiration.",
        explanation: "A function of the lysosomes is the breakdown and recycling of macronutrients, such as carbohydrates. Products of carbohydrate breakdown such as glucose are utilized by the mitochondria in the process of cell respiration.",
      },
      {
        id: '2.2.5',
        question: "Some viral infections can lead to the rupture of the lysosome membrane. Which prediction of the effect of this disruption of cellular compartmentalization is most likely correct?",
        options: ["A. Enzymes will be released that will specifically target the virus.", 
                    "B. Cellular osmotic concentrations will change, preventing viral entry into the cell.", 
                    "C. Hydrolytic enzymes will be released, which will cause cell death.", 
                    "D. Intracellular digestion of organic materials will increase, which will increase the energy available to the cell for fighting the virus."],
        answer: "C. Hydrolytic enzymes will be released, which will cause cell death.",
        explanation: "Hydrolytic enzymes will be released, resulting in cell death and preventing further viral reproduction."
      },
      {
        id: '2.2.6',
        question: "Gaucher disease is an inherited disorder in which cells of the body are unable to break down a particular type of lipid, resulting in a buildup of the lipid in some tissues and organs.Based on the information provided, gaucher disease results most directly from a defect in the function of which of the following organelles?",
        options: ["A. The smooth endoplasmic reticulum", 
                    "B. The nucleus", 
                    "C. The lysosome", 
                    "D. The mitochondrion"],
        answer: "C. The lysosome",
        explanation: "The lysosome contains specific enzymes used to break down a variety of molecules and cellular waste products. A defect in the function of the lysosomal enzymes that are needed to break down lipids is the most direct cause of Gaucher disease."
      },
      {
        id: '2.2.7',
        question: "Membrane-bound organelles are present in practically all eukaryotic cells. Which of the following statements most accurately summarizes the advantage of internal membranes in eukaryotic cells?",
        options: ["A. Membrane-bound organelles like the mitochondria and chloroplast are capable of semi autonomous replication.", 
                    "B. Internal membranes form partitions that can isolate specific reactions, increasing metabolic efficiency and the range of metabolic activities the cell can perform.", 
                    "C. Internal membranes allow prokaryotic cells to reside within eukaryotic cells to form cooperative cells.", 
                    "D. Compartmentalization allows cells to reproduce faster and with greater efficiency."],
        answer: "B. Internal membranes form partitions that can isolate specific reactions, increasing metabolic efficiency and the range of metabolic activities the cell can perform.",
        explanation: "Internal compartmentalization allows the cell to perform many different processes concurrently yet separately. Each compartment can have its own environment. For example, the low pH lysosome performs digestion, while the smooth endoplasmic reticulum synthesizes lipids and transcription occurs in the nucleus."
      }
    ]
  },
  unit2_3: {
    sectionA: [
      {
        id: '2.3.1',
        question: " Some cells, such as intestinal cells, exchange a lot of material with their surroundings. The surface-to-volume ratio of these cells affects the efficiency of material exchange. Which cell has the highest surface area to volume ratio? The table provides measurements of four different eukaryotic cells.",
        image: "/MCQ/2.3.1.png",
        options: ["A. Cell 1", 
                    "B. Cell 2", 
                    "C. Cell 3", 
                    "D. Cell 4"],
           answer: "B. Cell 2",
           explanation: "The surface area to volume calculation is 60 / 10 = 6. Of the four cells, this one has the highest ratio of surface area to volume and is likely to be most effective in the exchange of materials.  "
      },
      {
        id: '2.3.2',
        question: "Hereditary spherocytosis (HS) is a disorder of red blood cells that causes the cells to be smaller and spherical instead of having the usual flattened, biconcave shape. The average diameter of normal red blood cells is 7.2μm, and the average diameter of red blood cells in a person with HS was found to be 6.7μm. The normal red blood cell has an average surface area of 136μm2 and an average volume of 91μ m3. Which of the following provides an accurate calculation of the surface area to volume ratio of an HS red blood cell, as well as a prediction of its effect on the efficient transferring of oxygen compared to a normal red blood cell?",
        options: ["A. The ratio is 0.45, and the cells are more efficient at transferring oxygen.", 
                    "B. The ratio is 1.12, and the cells are less efficient at transferring oxygen.", 
                    "C. The ratio is 0.89, and the cells are less efficient at transferring oxygen.", 
                    "D. The ratio is 141, and the cells are more efficient at transferring oxygen."],
           answer: "C. The ratio is 0.89, and the cells are less efficient at transferring oxygen.",
           explanation: "The correct calculation of the surface area to volume ratio of the HS cell is 0.89. This ratio is less than the ratio found in a normal red blood cell, 1.49, so the cell would be less efficient at transferring oxygen."
      },
      {
        id: '2.3.3',
        question: "Stomata are pores on the surfaces of the leaves and stems of plants that regulate gas exchange between the plants and the atmosphere. Researchers found that the stomata density on the leaves of a species of plant change as the concentration of CO2 in the atmosphere changes. When grown at 350 ppm CO2 the plant has an average density of 300 stomata per mm2, but when grown at 400 ppm CO2 the plant has an average density of 250 stomata per \(mm^2\). Which of the following best describes how the ratio of the density of stomata (stomata per mm2) per CO2 concentration (ppm CO2) changes as the CO2 concentration increases?",
        options: ["A. The ratio decreases from 0.86 to 0.63, because fewer stomata are needed at higher CO2 concentrations", 
                    "B. The ratio decreases from 1.6 to 1.2, because fewer stomata are needed at higher CO2 concentrations", 
                    "C. The ratio increases from 0.63 to 0.86, because more stomata are needed at higher CO2 concentrations", 
                    "D. The ratio increases from 1.2 to 1.6, because more stomata are needed at higher CO2 concentrations"],
           answer: "A. The ratio decreases from 0.86 to 0.63, because fewer stomata are needed at higher CO2 concentrations",
           explanation: "The ratio of 300 stomata per \(mm2\) to 350 ppm CO2 is 0.86, and the ratio of 250 stomata per mm2 to 400 ppm CO2 is 0.63. This reflects that fewer stomata are needed as the concentration of CO2 increases."
      },
      {
        id: '2.3.4',
        question: "Researchers propose a model to explain variation in phytoplankton cell sizes in a marine environment. They base their model on the idea that smaller cells absorb nutrients more efficiently. The researchers predict that the mean diameter of phytoplankton cells will change by 50 micrometers for every 5-kilometer increase in distance from the shore because of a gradual decrease in nutrient availability. To test their model, the researchers determine that the phytoplankton cells found closest to shore have a mean diameter of 900 micrometers. Based on the model, what will be the mean diameter of the phytoplankton cells that are found 25 kilometers from shore?",
        options: ["A. 650 micrometers", 
                    "B. 875 micrometers", 
                    "C. 925 micrometers", 
                    "D. 1150 micrometers"],
           answer: "650 micrometers",
           explanation: "The model predicts that phytoplankton cell size will decrease with increasing distance from the shore, resulting in increased efficiency of nutrient absorption. The correct value was arrived at by subtracting 250 from 900."
      },
    ]
  },
  unit2_4: {
    sectionA: [
      {
        id: '2.4.1',
        question: "Figure 1. Testosterone movement across the cellular membrane. Testosterone is a small steroid hormone that is important in cell signaling. Which of the following describes where testosterone enters a cell and why it is able to cross at that point?",
        image: "/MCQ/2.4.1.png",
        options: ["A. 1, testosterone is nonpolar and can diffuse through the membrane.", 
                    "B. 2, testosterone covalently binds to a surface protein and transports into the cell.", 
                    "C. 3, testosterone dissolves in water and flows through the channel.", 
                    "D. 4, testosterone is filtered out of the extracellular fluid and taken into the cell by endocytosis."],
           answer: "A. 1, testosterone is nonpolar and can diffuse through the membrane.",
           explanation: "Steroids such as testosterone are hydrophobic lipids. Therefore, testosterone can cross the hydrophobic inner region of the phospholipid bilayer."
      },
      {
        id: '2.4.2',
        question: "The figure shows a representation of a protein embedded in a cell membrane. The numbers indicate different structural regions of the protein. Based on the figure, which of the following statements best describes the relationship between regions 1 and 2 of the protein?",
        image: "/MCQ/2.4.2.png",
        options: ["A. Region 1 is hydrophilic because it interacts with the interior of the membrane, whereas region 2 is hydrophobic because it interacts with an aqueous environment.", 
                    "B. Region 1 is hydrophilic because it interacts with an aqueous environment, whereas region 2 is hydrophobic because it interacts with the interior of the membrane.", 
                    "C. Region 1 is hydrophobic because it interacts with the interior of the membrane, whereas region 2 is hydrophilic because it interacts with an aqueous environment. ", 
                    "D. Region 1 is hydrophobic because it interacts with an aqueous environment, whereas region 2 is hydrophilic because it interacts with the interior of the membrane."],
           answer: "B. Region 1 is hydrophilic because it interacts with an aqueous environment, whereas region 2 is hydrophobic because it interacts with the interior of the membrane.",
           explanation: "A cell membrane is a phospholipid bilayer that separates one aqueous environment from another. The interior of a phospholipid bilayer is a hydrophobic environment. Because region 1 interacts with the aqueous environment on one side of the phospholipid bilayer, it is most likely hydrophilic. Because region 2 interacts with the interior of the phospholipid bilayer, it is most likely hydrophobic."
      },
      {
        id: '2.4.3',
        question: "Which of the following best describes the numbered areas?",
        image: "/MCQ/2.4.3.png",
        options: ["A. Areas 1 and 3 are polar, since the membrane molecules are aligned with water molecules.", 
                    "B. Area 2 is polar, since water has been excluded from this area of the membrane.  ", 
                    "C. Areas 1 and 3 are hydrophilic, since membrane molecules formed covalent bonds with water.", 
                    "D.  Area 2 is nonpolar, since hydrogen bonds between the adjacent lipids hold the membrane together."],
           answer: "A. Areas 1 and 3 are polar, since the membrane molecules are aligned with water molecules. ",
           explanation: "As indicated in the diagram, the heads of the phospholipids in areas 1 and 3 are adjacent to water molecules, which shows that the phospholipid heads are hydrophilic."
      },
      {
        id: '2.4.4',
        question: "Beetroot cells contain a family of dark red pigments called betalains. The selectively permeable nature of the beetroot cells keeps the internal environment of the cell separate from the external environment of the cell. Researchers are interested in determining whether the selective permeability of beetroot cells is due to the cell membrane or if it is due to the cell wall. Exposure to cellulase is known to damage the structure of the cell wall. An experiment is set up in which beetroot cells are placed in an aqueous solution with cellulase and in one without cellulase. Which of the following results best refutes the alternative hypothesis that selective permeability is a consequence of the cell wall?",
        options: ["A. When beetroot cells are placed in a solution with cellulase, the solution turns dark red. ", 
                    "B. When beetroot cells are placed in a solution with cellulase, the solution remains clear.", 
                    "C. When beetroot cells are placed in a solution, it turns dark red with or without cellulase present.", 
                    "D. Since plant cells contain cell membranes, not cell walls, the alternate hypothesis cannot be tested."],
           answer: "B. When beetroot cells are placed in a solution with cellulase, the solution remains clear.",
           explanation: "Cellulase digests cellulose and damages the structure of the cell wall, not the cell membrane. The lack of color change in the solution indicates that the betalain is not leaking out of the beetroot cells even though the cell wall has been damaged. Therefore, the permeability of the membrane must be a consequence of the cell membrane and not the cell wall."
      },
      {
        id: '2.4.5',
        question: "The cell membrane is selectively permeable due to its structure. Thus, the internal environment of the cell is distinct from the external environment of the cell. One biologist hypothesizes that small nonpolar molecules readily pass through the membrane. Another biologist alternatively hypothesizes that these types of molecules require channel and transport proteins that are embedded in the membrane in order to move across the membrane. Which of the following data would best refute this alternative hypothesis?",
        options: ["A. Ethanol is found in the cytosol of cells when they are briefly exposed to a ten percent ethanol solution.", 
                    "B. Cells become oxygen deficient when membrane protein activity is blocked. ", 
                    "C. CO2 and N2 movement in and out of cells is unaffected when membrane protein activity is blocked.", 
                    "D. Sodium ions cannot move across the cell membrane when membrane protein activity is blocked."],
           answer: "C. CO2 and N2 movement in and out of cells is unaffected when membrane protein activity is blocked.",
           explanation: " Both CO2 and N2 are small nonpolar molecules. Their ability to enter and leave cells normally when membrane protein activity is blocked would refute the alternative hypothesis."
      },
      {
        id: '2.4.6',
        question: "Aquaporins are channel proteins that facilitate the transport of water across the cell membrane. One group of researchers hypothesizes that without functional aquaporins, no water will be able to enter the cell. A different group proposes an alternative hypothesis, stating that even with nonfunctional aquaporins, a small amount of water will still cross the cell membrane. An experiment is set up in which plant cells with mutated (nonfunctional) aquaporins and plant cells with normally functioning aquaporins are both placed in distilled water. Which of the following data would support the alternative hypothesis?",
        options: ["A. Cells with functional aquaporins exhibit low turgor pressure and are hypertonic.", 
                    "B. Cells with functional aquaporins exhibit high turgor pressure and are hypotonic.", 
                    "C. Cells with mutated aquaporins exhibit an absence of turgor pressure and are completely plasmolyzed.", 
                    "D. Cells with mutated aquaporins exhibit moderate turgor pressure and are hypertonic."],
           answer: "D. Cells with mutated aquaporins exhibit moderate turgor pressure and are hypertonic.",
           explanation: "Even with mutated aquaporins, a small amount of water is able to enter and leave the cell. Thus, turgor pressure is not lost and the alternative hypothesis is supported."
      },
    ]
  },
  unit2_5: {
    sectionA: [
      {
        id: '2.5.1',
        question: "Intravenous (IV) therapy is used for fluid replacement in instances of dehydration in humans and other animals. One type of IV fluid is essentially a saltwater solution. To determine the best concentration for therapy in people, a team of students is researching the effects of solutions of different salt concentrations on red blood cells. The following observations were made from three different red blood cell samples viewed under a microscope. The figure presents three blood cells. The left cell is swollen, the middle cell is of normal disc shape, and the right cell is shrunken and irregular. 1. 0.3% Saline (Cells swell) 2. 0.9% Saline (Cells unchanged) 3. 1.5% Saline (Cells shrink).    The team wants to extend the research project. What should the team of students do next to obtain data that are more conclusive?  ",
        image: "/MCQ/2.5.1.png",
        options: ["A. Repeat the process with other salt concentrations. ", 
                    "B. Develop a model to explain why the cells react differently to different salt concentrations. ", 
                    "C. Repeat the process using red blood cells from other animals.  ", 
                    "D. Develop an experimental procedure that uses a stain that makes the organelles of red blood cells more visible.  "],
           answer: "A. Repeat the process with other salt concentrations.  ",
           explanation: "he figures illustrate the extremes of hypotonic (swollen cells) and hypertonic (shriveled cells) environments, so an extension would be to investigate the small range of acceptable salt concentrations in IV fluid solutions.  "
      },
      {
        id: '2.5.2',
        question: "Certain bacteria can use both ethyl alcohol and acetate as sources of nutrients. In an experiment where both nutrients are available to a bacterial population, the following results were obtained and graphed. What additional procedure would best help determine whether these movements are due to active transport or to passive transport?  ",
        options: ["A. Repeat the original experiment, but at three different temperatures. Compare the transport rates among the three temperatures.  ", 
                    "B. Repeat the original experiment, but add a substance known to block movement of molecules across aquaporins. Compare the rates on the two graphs.  ", 
                    "C. Use two additional treatments, one containing only ethyl alcohol and one containing only acetate. Compare the graphs of these two treatments with the original graph. ", 
                    "D. Use two additional treatments, one containing only ethyl alcohol and one containing only acetate. Include a substance known to block ATP use by the plasma membrane. Compare the graphs of these two treatments to the original graph. "],
           answer: "D. Use two additional treatments, one containing only ethyl alcohol and one containing only acetate. Include a substance known to block ATP use by the plasma membrane. Compare the graphs of these two treatments to the original graph.  ",
           explanation: "Active transport requires the availability of ATP. If the nutrients are actively transported, blocking ATP use should reduce the rate of transport along the whole concentration range. If these two graphs are the same as the original graph, the transport is passive. Separation of the nutrients eliminates the possibility that the two transport processes could interfere with each other.  "
      },
      {
        id: '2.5.3',
        question: "Researchers investigate the transport of a certain protein into cells by endocytosis. In an experiment, the researchers incubate the cells in the presence of the protein and measure the amount of the protein that is absorbed into the cells over a five-minute period. Based on their observations, what should the researchers do to further clarify how the availability of the protein outside the cells affects the rate of endocytosis of the protein? ",
        options: ["A. Incubate the cells in the absence of the protein.  ", 
                    "B. Incubate the cells in the presence of several different proteins. ", 
                    "C. Incubate the cells in the presence of several different concentrations of the protein.", 
                    "D. Incubate the cells in the presence of the protein for several different lengths of time"],
           answer: "C. Incubate the cells in the presence of several different concentrations of the protein.",
           explanation: " Changing the concentration of the protein will change the availability of the protein outside the cells. "
      },
      {
        id: '2.5.4',
        question: "An investigator wants to understand whether a newly found membrane protein is involved in membrane transport of a certain particle. Which investigation will help determine whether the new membrane protein is a channel protein involved in membrane transport?  Figure 1. A section of a cell’s plasma membrane, showing a channel protein and a concentration gradient across the membrane ",
        image: "/MCQ/2.5.4.png",
        options: ["A. Add small nonpolar molecules to the extracellular space and measure the direction of particle movement of the molecules.  ", 
                    "B. Measure the rate of extracellular fluid movement into the intracellular space.", 
                    "C. Add more of the proteins to the plasma membrane and measure the rate of the particle movement.", 
                    "D. Remove ATP from the intracellular space and measure the rate of the particle movement into the intracellular space."],
           answer: "C. Add more of the proteins to the plasma membrane and measure the rate of the particle movement. ",
           explanation: "If the movement of particles is mediated by the channel protein, then an increase in proteins in the cell membrane should influence the rate of particle movement across the membrane"
      },
      {
        id: '2.5.5',
        question: "Lysosomes digest food particles brought into a cell by endocytosis. After a vesicle containing food particles fuses with a lysosome, \(H^+\) ions are transported into the lysosome from the cytosol. This significantly lowers the pH of the lysosome relative to the cytosol and activates the enzymes that digest the particles. Which of the following best predicts what will happen to the lysosomal enzymes if the proteins that transport H+ions from the cytosol into the lysosome are damaged?  ",
        options: ["A. The lysosomal enzymes will not become active, since there will be no active transport of H+ ions. ", 
                    "B. The lysosomal enzymes will not become active, since H+ ions will diffuse out of the lysosome.  ", 
                    "C. The lysosomal enzymes will become active, since facilitated diffusion will move H+ ions into the lysosome.  ", 
                    "D. The lysosomal enzymes will become active, since passive diffusion will move H+ ions into the lysosome."],
           answer: "A. The lysosomal enzymes will not become active, since there will be no active transport of H+ ions.  ",
           explanation: "Since the pH of the lysosome has to become lower than that of the cytosol, active transport is needed to move \(H^+\) ions into the lysosome, against the \(H^+\) ion concentration gradient, to activate the enzymes."
      },
      {
        id: '2.5.6',
        question: "Which of the following transport mechanisms will be affected most directly by a temporary shortage of ATP molecules inside the cell?  ",
        options: ["A. The movement of water molecules through aquaporins", 
                    "B. The diffusion of oxygen molecules across the plasma membrane", 
                    "C. The transport of glucose molecules against a concentration gradient", 
                    "D. The facilitated diffusion of \(Ca^{2+}\) ions into the cell"],
           answer: "C. The transport of glucose molecules against a concentration gradient  ",
           explanation: " The active transport of glucose molecules against a concentration gradient requires an input of energy. Biological processes that require an input of energy typically incorporate the hydrolysis of ATP, an energy-rich molecule.  "
      },
      {
        id: '2.5.7',
        question: " Some membrane proteins help maintain the concentrations of ions inside a cell by transporting the ions across the cell\'s plasma membrane. Other membrane proteins form pores in the plasma membrane through which the ions can diffuse. A model showing the influence of membrane proteins on the movement of sodium (\(Na^+\)) and potassium (\(K^+\)) ions across a plasma membrane is presented in Figure 1. ",
        image: "/MCQ/2.5.7.png",
        options: ["A. The \(Na^+\) concentration outside the cell will increase", 
                    "B. The \(Na^+\) concentration inside the cell will increase.  ", 
                    "C. The \(K^+\) concentration inside the cell will increase.", 
                    "D. The \(K^+\) concentration outside the cell will decrease."],
           answer: "B. The \(Na^+\) concentration inside the cell will increase.  ",
           explanation: "Without ATP, the \(Na^+\) ions will continue to leak into the cell but will not be pumped out of the cell, resulting in a concentration increase inside the cell.  "
      },
      {
        id: '2.5.8',
        question: "The illustration shows the active transport of hydrogen ions through a membrane protein. Which of the following best predicts the effect of not having ATP available to supply energy to this process?",
        image: "/MCQ/2.5.8.png",
        options: ["A.  H+ ions will stop moving through the protein.", 
                    "B. H+ ions will move in the other direction through the protein.  ", 
                    "C.  H+ ions will continue to move through the protein in the original direction but at a slower rate. ", 
                    "D. H+ ions will begin to move through the phospholipid portion of the membrane in the original direction.  "],
           answer: "A. H+ ions will stop moving through the protein. ",
           explanation: "Metabolic energy such as ATP is required for active transport of ions against a concentration gradient."
      },
    ]
  },
  unit2_6: {
    sectionA: [
      {
        id: '2.6.1',
        question: "The solute potential of distilled water is",
        options: ["A. negative", 
                    "B. zero", 
                    "C. positive", 
                    "D. dependent on temperature"],
           answer: "B. zero ",
           explanation: " Since solute potential is given by the formula ΨS = -iCRT, if any value is 0, ΨS will be 0. Since there is no concentration of solute in distilled water, it will therefore have both a concentration and solute potential of 0."
      },
      {
        id: '2.6.2',
        question: "A solution has a solute concentration of 0.25 moles per liter and is at a temperature of 37°C. The ionization constant of the solute is 1. What is the solute potential of this solution?",
        options: ["A.  -0.64 bars", 
                    "B. -0.77 bars", 
                    "C. -6.44 bars", 
                    "D. -7.70 bars"],
           answer: "C. -6.44 bars",
           explanation: "Since ΨS = -iCRT, we can plug in values to solve. ΨS = - (1)(0.25)(0.0831)(273+37) = -6.44 bars"
      },
      {
        id: '2.6.3',
        question: "A cell has a solute potential of -5.42 bars and a pressure potential of 0.48 bars. What is its total water potential?",
        options: ["A. -5.42 bars", 
                    "B. -4.94 bars", 
                    "C. 0.48 bars", 
                    "D. 4.94 bars"],
           answer: "B. -4.94 bars",
           explanation: "Since water potential is given by Ψ = Ψp + ΨS, we can substitute values into the formula. Ψ = 0.48 + (-)5.42 = -4.94 bars"
      },
      {
        id: '2.6.4',
        question: "A blood cell with a water potential of -7.7 bars is placed in distilled water. Which of the following correctly describes what will occur?",
        options: ["A. Water will flow out of the blood cell because the blood cell has a higher water potential than distilled water.", 
                    "B. Water will flow into the blood cell because the blood cell has a higher water potential than distilled water.", 
                    "C. Water will flow out of the blood cell because the blood cell has a lower water potential than distilled water.", 
                    "D. Water will flow into the blood cell because the blood cell has a lower water potential than distilled water"],
           answer: "D. Water will flow into the blood cell because the blood cell has a lower water potential than distilled water",
           explanation: "Water potential flows from areas of higher water potential to areas of lower water potential, in this case from the water (higher) to the blood cell (lower). Choice D also correctly identifies that the blood cell has a lower water potential than the distilled water."
      },
    ]
  },
  unit2_7: {
    sectionA: [
      {
        id: '2.7.1',
        question: "Researchers have proposed a model of chloroplast evolution. According to the model, chloroplasts evolved from a small prokaryotic organism that was engulfed by an ancestral eukaryote. The engulfed prokaryotic then formed an endosymbiotic relationship with the eukaryotic host.Which of the following observations best supports the model?",
        options: ["A. Chloroplasts and some prokaryotes share similar photosynthetic reactions", 
                    "B. Chloroplasts are separated from other subcellular compartments by semipermeable membranes", 
                    "C. Prokaryotic and eukaryotic organisms both acquire nutrients from the surrounding environment", 
                    "D. D. Eukaryotes evolved after prokaryotes and have more complex structures"],
           answer: "A. Chloroplasts and some prokaryotes share similar photosynthetic reactions",
           explanation: "Photosynthesis is a feature of only a limited number of organisms, including cyanobacteria, algae, and plants. The fact that this specialized process is similar in prokaryotes, such as cyanobacteria, and in eukaryotes, such as algae and plants, provides evidence in support of the model."
      },
      {
        id: '2.7.2',
        question: "Which of the following observations best supports the claim that mitochondria evolved from once-free-living prokaryotic cells by the process of endocytosis?",
        options: ["A. Mitochondria produce ATP ", 
                    "B. Mitochondria contain proteins", 
                    "C. Mitochondria exchange substances with the cytosol", 
                    "D. Mitochondria are surrounded by a double membrane"],
           answer: "D. Mitochondria are surrounded by a double membrane",
           explanation: "The double membranes of mitochondria provide evidence that an ancestor of mitochondria, which was most likely a type of free-living aerobic bacterium, was ingested via endocytosis by a primitive eukaryotic cell."
      },
      {
        id: '2.7.3',
        question: "Which of the following is NOT evidence that supports the endosymbiosis hypothesis?",
        options: ["A. Mitochondria and chloroplasts have their own circular DNA", 
                    "B. Mitochondria and chloroplasts have their own ribosomes", 
                    "C. Mitochondria and chloroplasts reproduce by binary fission", 
                    "D. Mitochondria and chloroplasts are found in all eukaryotic cells"],
           answer: "D. Mitochondria and chloroplasts are found in all eukaryotic cells",
           explanation: "Mitochondria and chloroplasts are not found in all eukaryotic cells; chloroplasts are only found in eukaryotic cells that perform photosynthesis. Mitochondria and chloroplasts do have their own circular DNA as well as their own ribosomes, and they both reproduce by binary fission, which are all characteristics they share with prokaryotes. Thus, choices (A), (B), and (C) are all evidence of the endosymbiosis hypothesis."
      },
      {
        id: '2.7.4',
        question: "Euglenids are single-cell eukaryotes that live in aquatic environments. The chloroplasts found inside euglenids are enveloped by three membranes.. The inner membrane of euglenid chloroplasts resembles the thylakoid membrane. Which of the following claims about the origin of the euglenid chloroplast is best supported by the three-membrane structure of the envelope?",
        options: ["A. It originated from the spontaneous assembly of organic molecules into a lipid bilayer inside a free-living prokaryote ", 
                    "B. It originated from the incorporation of a photosynthetic prokaryote into a eukaryotic cell by two endosymbiotic events ", 
                    "C. It originated from the fusion of the plasma membranes of two different free-living photosynthetic prokaryotes", 
                    "D. It originated from the incorporation of a photosynthetic prokaryote into a eukaryotic cell by a single endosymbiotic event"],
           answer: "B. It originated from the incorporation of a photosynthetic prokaryote into a eukaryotic cell by two endosymbiotic events ",
           explanation: "The three-membrane structure of the chloroplast envelope best supports the claim presented in this answer choice. The three-membrane structure most likely resulted from two endosymbiotic events, with the middle membrane originating from the first event and the outer membrane originating from the second event"
      },
    ]
  },
  unit4_1: {
    sectionA: [
      {
        id: '4.1.1',
        question: "Vertebrate immune responses involve communication over short and long distances. Which of the following statements best helps explain how cell surface proteins, such as MHC proteins and T cell receptors, mediate cell communication over short distances?",
        options: ["A. The proteins receive electrical signals from nerve cells", 
                    "B. The proteins leave the cell and travel in the bloodstream to other cells", 
                    "C. The proteins interact directly with proteins on the surfaces of other cells", 
                    "D. The proteins bind to molecules secreted by cells located in other parts of the body"],
           answer: "C. The proteins interact directly with proteins on the surfaces of other cells",
           explanation: " In vertebrate immune responses, cell surface proteins, including MHC proteins and T cell receptors, mediate cell communication over short distances by interacting directly with proteins on the surfaces of other cells. In many cases, the protein-protein interaction activates signal transduction pathways that control specific cellular responses. The interaction by cell surface proteins is an example of cell communication that is limited to short distances because the communicating cells must be near to each other."
      },
      {
        id: '4.1.2',
        question: "Adjacent plant cells have narrow channels called plasmodesmata that pass through the cell walls of the connected cells and allow a cytoplasmic connection between the cells. Which of the following statements best explains a primary function of plasmodesmata?  ",
        options: ["A. They allow the movement of molecules from one cell to another, enabling communication between cells", 
                    "B. They prevent the cell membrane from pulling away from the cell wall during periods of drought", 
                    "C. They eliminate the need to produce signaling molecules and eliminate the need for cells to have receptors for signaling molecules", 
                    "D. They increase the surface area available for attachment of ribosomes and thus increase protein synthesis"],
           answer: "A. They allow the movement of molecules from one cell to another, enabling communication between cells ",
           explanation: "Plasmodesmata are channels through which cytosol exchange can occur, moving select molecules directly between cells. This enables cells enclosed by a cell wall to communicate."
      },
      {
        id: '4.1.3',
        question: "A hydrophilic peptide hormone is produced in the anterior pituitary gland located at the base of the brain. The hormone targets specific cells in many parts of the body. Which of the following best explains a possible mechanism that would enable the hormone to efficiently reach all of the target cells in the body? ",
        options: ["A. The hormone interacts with the nerves at the base of the brain and directs signals to the target cells through the nervous system  ", 
                    "B. The hormone diffuses into target cells adjacent to the anterior pituitary gland, where the hormone is degraded", 
                    "C. The hormone is released into the bloodstream where it can be transported to all cells with the correct receptors", 
                    "D. The hormone moves through cytoplasmic connections between cells until it has reached all cells with the correct intracellular binding sites"],
           answer: "C. The hormone is released into the bloodstream where it can be transported to all cells with the correct receptors  ",
           explanation: "The bloodstream is the most effective way to distribute a hormone that has to reach multiple target cells that are relatively long distances from the source of the hormone.  "
      },
      {
        id: '4.1.4',
        question: "An antigen can induce an immune response in a host organism. Antigens are targeted by antibodies that are produced by the organism’s immune system in response to contact with the antigen. Antibodies are specific to antigens. Many different cell types are involved in immune responses. Which of the following best explains the role of cell-to-cell communication during a response to an invasion of antigens?",
        options: ["A. Chemicals that are secreted from antigen-presenting cells then activate helper T cells.  ", 
                    "B. A macrophage cell engulfs a pathogen in the blood.", 
                    "C. Antigens attaching to receptors on memory B cells stimulate the memory B cells to become plasma cells.", 
                    "D. Antigen-presenting cells engulf antigens at the first exposure.  "],
           answer: "A. Chemicals that are secreted from antigen-presenting cells then activate helper T cells.",
           explanation: "Cell signaling pathways are activated by cell-to-cell communication.  "
      },
    ]
  },
  unit4_2: {
    sectionA: [
      {
        id: '4.2.1',
        question: "G proteins are a family of receptor proteins that are involved in transmitting signals from outside a cell to inside a cell. When a signaling molecule binds to a G protein, the G protein is activated. The G protein then activates an enzyme that produces a second messenger called cAMP. Which of the following describes a critical role of cAMP during the transduction stage of a G protein signal transduction pathway?  ",
        options: ["A. cAMP carries the signal to the nucleus of the cell and results in new sequences of nucleotides being added to the cell’s DNA  ", 
                    "B. cAMP binds the extracellular signal molecule and carries it to the intracellular target specified by the signal", 
                    "C. cAMP modifies a specific monomer so that it can be added to an elongating structural macromolecule ", 
                    "D. cAMP results in the activation of an enzyme that amplifies the signal by acting on many substrate molecules"],
           answer: "D. cAMP results in the activation of an enzyme that amplifies the signal by acting on many substrate molecules",
           explanation: "Typically, cAMP immediately activates protein kinase A, which phosphorylates various other proteins. Kinases are a type of enzyme that activates proteins by transferring a phosphate group from ATP. Kinases are involved in many signaling pathways in a wide variety of organisms. "
      },
      {
        id: '4.2.2',
        question: "Metformin is a drug used to treat type 2 diabetes by decreasing glucose production in the liver. AMP-activated protein kinase (AMPK) is a major cellular regulator of glucose metabolism. Metformin activates AMPK in liver cells but cannot cross the plasma membrane. By blocking AMPK with an inhibitor, researchers found that AMPK activation is required for metformin to produce an inhibitory effect on glucose production by liver cells. Which of the following best describes the component that metformin represents in a signal transduction pathway that regulates glucose production in the liver?  ",
        options: ["A.  It is a secondary messenger that amplifies a signal through a cascade reaction  ", 
                    "B. It is a ligand that activates the signal transduction pathway of the activation of AMPK  ", 
                    "C. It is an allosteric regulator that binds to a crucial section of the DNA that makes the enzymes needed for glucose uptake ", 
                    "D. It is a competitive inhibitor that binds to glucose and prevents it from entering the cell  "],
           answer: "B. It is a ligand that activates the signal transduction pathway of the activation of AMPK ",
           explanation: "Since metformin does not cross the membrane, it is likely a ligand that binds to a receptor on the surface of the plasma membrane, initiating the signal transduction pathway.  "
      },
      {
        id: '4.2.3',
        question: "Which of the following steps in a signaling pathway typically occurs first once a chemical messenger reaches a target cell?   ",
        options: ["A. Specific genes are activated", 
                    "B. A second messenger molecule is produced  ", 
                    "C. A ligand binds to a receptor ", 
                    "D.  Specific proteins are synthesized"],
           answer: "A. Specific genes are activated",
           explanation: "The chemical messenger (ligand) first binds to a receptor, which then changes shape to initiate the signaling pathway.  "
      },
      {
        id: '4.2.4',
        question: "The epinephrine signaling pathway plays a role in regulating glucose homeostasis in muscle cells. The signaling pathway is activated by the binding of epinephrine to the beta-2 adrenergic receptor. A simplified model of the epinephrine signaling pathway is represented in Figure 1. Figure 1. A simplified model of the epinephrine signaling pathway in muscle cells. Based on Figure 1, which of the following statements best describes the epinephrine signaling pathway?  ",
        //image = "/MCQ/4.2.4.png",
        options: ["A. It involves the opening and closing of ion channels", 
                    "B. In involves enzymes activating other enzymes ", 
                    "C. It involves changes in the expression of target genes", 
                    "D. It involves protons moving down a concentration gradient"],
           answer: "B. In involves enzymes activating other enzymes",
           explanation: "Based on Figure 1, the epinephrine signaling pathway involves enzymes activating other enzymes. For example, the pathway includes several protein kinases, enzymes that catalyze the transfer of a phosphate group from ATP to a protein substrate. As represented in Figure 1, protein kinase A catalyzes the transfer of a phosphate group from ATP to phosphorylase kinase, which results in the activation of phosphorylase kinase. The activated phosphorylase kinase activates glycogen phosphorylase in a similar manner.  "
      },
    ]
  },
  unit4_3: {
    sectionA: [
      {
        id: '4.3.1',
        question: "Phosphofructokinase (PFK) is a key enzyme in glycolysis. ATP is one of the two substrates for the reaction catalyzed by PFK. ATP is also an allosteric regulator of PFK. Figure 1 shows the enzyme-substrate interactions of PFK Figure 1. The enzyme-substrate interactions of PFK. A researcher found a mutation that resulted in the PFK enzyme being unable to bind ATP to the allosteric site. Which of the following best predicts the effect of the mutation?   ",
        //image = "/MCQ/4.3.1.png",
        options: ["A. The activity of the enzyme will not be affected because the active site is not involved in substrate binding at the allosteric site", 
                    "B. Negative feedback regulation does not occur, so the enzyme will be active when glycolysis is not needed", 
                    "C. Positive feedback does not occur, and the activity of the enzyme will decrease when glycolysis is needed", 
                    "D. The activity of the enzyme will fluctuate independent of the ATP concentration"],
           answer: "B. Negative feedback regulation does not occur, so the enzyme will be active when glycolysis is not needed",
           explanation: "The reaction is normally inhibited when ATP binds to the allosteric site and changes the shape of the active site to the point where it can no longer bind to the substrate. The mutation will not allow this inhibition to occur, and the enzyme will be active even at high ATP concentrations.  "
      },
      {
        id: '4.3.2',
        question: "A person’s blood glucose level fluctuates during the day, as represented in Figure 1. Two hormones, insulin and glucagon, are directly involved in regulating the blood glucose level to maintain a healthy level. Insulin acts to lower the blood glucose level, and glucagon acts to increase the blood glucose level. Figure 1. Blood glucose fluctuations of an individual. Which of the following best predicts what will happen to the blood glucose level if the person has another meal at 5 p.m.?  ",
        //image = "/MCQ/4.3.2.png",
        options: ["A. Immediately after the meal, the blood glucose level will decrease because of the increase in glucagon levels  ", 
                    "B. Immediately after the meal, the blood glucose level will increase, and then insulin will be secreted to counter the increase", 
                    "C. Several hours after the meal, the blood glucose level will increase sharply because of an increase in the amount of glucagon secreted", 
                    "D. The blood glucose level will not change after the 5 p.m. meal because the person has already consumed two meals and the blood glucose level has been adjusted to a steady-state level"],
           answer: "B. Immediately after the meal, the blood glucose level will increase, and then insulin will be secreted to counter the increase",
           explanation: "The blood glucose levels increase due to the nutrients taken in. This increase is a signal for the pancreas to release more insulin that will stimulate cells to take in the excess glucose. As a result, the blood glucose level will then decrease. "
      },
      {
        id: '4.3.3',
        question: "Blood clots are formed by a positive feedback loop. Two pathways exist, the extrinsic and intrinsic pathways, which converge during clot formation. There are many clotting factors involved, most of which are proteins. Vitamin K is required for the formation of the active form of several of the clotting factors, including Factor X. A simplified model of the blood clotting process is shown in Figure 1. Warfarin is a drug used to treat certain blood clots. Warfarin blocks the formation of the active form of vitamin K-dependent clotting factors. Based on the model, which of the following best predicts the effects of warfarin on a patient?   ",
        //image = "/MCQ/4.3.3.png",
        options: ["A. Fibrinogen will form fibrin, but the clot will not form because Factor XIII will not be synthesized", 
                    "B. The intrinsic pathway will take over because the clotting factors are part of that pathway", 
                    "C.Thrombin will be converted to prothrombin because Factor X will reverse the reaction", 
                    "D. Factor X will not be activated, which will prevent thrombin from forming"],
           answer: "D. Factor X will not be activated, which will prevent thrombin from forming",
           explanation: "Vitamin K is required for the synthesis of Factor X and warfarin inhibits that process; thus, clots are prevented from forming.  "
      },
      {
        id: '4.3.4',
        question: "The epinephrine signaling pathway plays a role in regulating glucose homeostasis in muscle cells. The signaling pathway is activated by the binding of epinephrine to the beta-2 adrenergic receptor. A simplified model of the epinephrine signaling pathway is represented in Figure 1. Figure 1. A simplified model of the epinephrine signaling pathway in muscle cells Cyclic AMP phosphodiesterase is an enzyme that catalyzes the conversion of cyclic AMP to a different molecule. Which of the following best predicts the effect of inhibiting cyclic AMP phosphodiesterase in a muscle cell stimulated by epinephrine? ",
        //image = "/MCQ/4.3.4.png",
        options: ["A. The concentration of cyclic AMP will decrease because adenylyl cyclase will no longer be activated", 
                    "B. The G protein will diffuse out of the cell because it will no longer bind to the plasma membrane  ", 
                    "C. Phosphorylase kinase will remain active because protein kinase A will no longer be deactivated", 
                    "D. Glycolysis will stop because epinephrine signaling will no longer stimulate glycogen breakdown"],
           answer: "C. Phosphorylase kinase will remain active because protein kinase A will no longer be deactivated",
           explanation: "Phosphorylase kinase is activated by protein kinase A, which is activated by binding to cyclic AMP. Cyclic AMP phosphodiesterase causes the deactivation of protein kinase A by lowering the intracellular levels of cyclic AMP. Inhibiting cyclic AMP phosphodiesterase will result in protein kinase A remaining active, which will result in phosphorylase kinase remaining active. "
      },
    ]
  },
  unit4_4: {
    sectionA: [
      {
        id: '4.4.1',
        question: "Scientists have estimated that it takes yeast cells approximately 20 hours to complete the entire cycle. Table 1 shows the amount of time in each phase of the life cycle for yeast cells. Based on Table 1, what percent of the life cycle of yeast cells is spent in DNA replication?",
        image: "/MCQ/4.4.1.png",
        options: ["A. 5%", 
                    "B. 10%", 
                    "C. 25%", 
                    "D. 50%"],
           answer: "C. 25%",
           explanation: "The yeast cells spend 5 hours out of a total of 20 hours in S phase, which is 25%.  "
      },
      {
        id: '4.4.2',
        question: "Researchers grew seedlings of corn, Zea mays, in loose and compact sand. The researchers measured the amount of time required for the cells in the growing root tips of the seedlings to double in number. The mean cell doubling times for the two groups of seedlings are shown in Figure 1. Figure 1. Mean cell doubling times for the growing root tips of Zea mays seedlings planted in loose or compact sand. Based on the sample means, which of the following conclusions about the cells in the growing root tips of Zea mays seedlings is best supported by the results of the experiment?",
        image: "/MCQ/4.4.2.png",
        options: ["A. The cells of the root tips grow to larger sizes when the seedlings are planted in compact sand than when the seedlings are planted in loose sand  ", 
                    "B. The average rate of mitotic cell division is greater for the root tips growing in loose sand than for the root tips growing in compact sand", 
                    "C. The average cell cycle time is greater for the root tips growing in compact sand than for the root tips growing in loose sand", 
                    "D. More cells are produced per unit of time in the root tips growing in compact sand than in the root tips growing in loose sand"],
           answer: "D. More cells are produced per unit of time in the root tips growing in compact sand than in the root tips growing in loose sand",
           explanation: " According to the figure, the mean cell doubling time of Zea mays seedling root tips in compact sand is less than in loose sand. A lower mean cell doubling time indicates an increased rate of mitotic cell division for cells of root tips in compact sand."
      },
      {
        id: '4.4.3',
        question: "The relative amounts of DNA present in the nucleus of a cell at four different stages of the life cycle are shown in Figure 1. Figure 1. Relative amounts of DNA present in the nucleus of a cell Based on Figure 1, which of the following statements correctly links a stage of the cell cycle with the event occurring at that stage? ",
        image: "/MCQ/4.4.3.png",
        options: ["A. Stage I represents the \(G_2\) phase of the cell cycle ", 
                    "B. Synthesis of sufficient DNA for two daughter cells occurs in stage II  ", 
                    "C. Stage III includes mitosis", 
                    "D. The replication of genetic material occurs in stage IV"],
           answer: "B. Synthesis of sufficient DNA for two daughter cells occurs in stage II  ",
           explanation: "Stage II represents the S (synthesis) phase of interphase. The genetic information (DNA) is doubling. If this did not occur, the daughter cells formed as a result of the cell cycle would have too little genetic information (chromosomes). This process is visible on the graph, as the copies of genetic information increase from one to two copies. "
      },
      {
        id: '4.4.4',
        question: "4. Researchers tracked the amount of DNA (measured in picograms) over time beginning with a single cell and continuing through several rounds of cell division. The researchers observed threadlike chromosomes prior to cell division. The threadlike chromosomes disappeared from view shortly after each division. The amount of DNA in picograms per cell over several rounds of cell division is shown in Figure 1.  Figure 1. Amount of DNA in picograms per cell over several rounds of cell division. Which of the following statements is consistent with the data in Figure 1? ",
        image: "/MCQ/4.4.4.png",
        options: ["A. The cells have a haploid chromosome number of 3   ", 
                    "B. The cells have a diploid chromosome number of 6", 
                    "C. There is a change from 3 to 6 picograms of DNA because DNA is replicated before each round of cell division", 
                    "D. There is a change from 6 to 3 picograms of DNA after each cell division because the chromosomes lengthen following cell division"],
           answer: "C. There is a change from 3 to 6 picograms of DNA because DNA is replicated before each round of cell division",
           explanation: " The change from 3 to 6 picograms of DNA prior to replication indicates that the DNA has been replicated. The replicated DNA is condensed into chromosomes during cell division or mitosis. This ensures that the complete genome from a parent cell is passed on to two genetically identical daughter cells."
      },
    ]
  },
  unit4_5: {
    sectionA: [
      {
        id: '4.5.1',
        question: "The epidermal growth factor receptor EGFR is a cell surface receptor. When a growth factor binds to EGFR, the receptor is activated. The activated EGFR triggers a signal transduction pathway, which leads to increased frequency of cell division. Which of the following best predicts the effect of a mutation that causes EGFR to be active in the absence of a growth factor?",
        options: ["A. Increased apoptosis will lead to abnormal growth of the tissue", 
                    "B. Increased cell division will lead to the formation of a tumor", 
                    "C. Cells will exit the cell cycle, entering a non-dividing G0 phase", 
                    "D. Fewer cells will be in any of the stages of mitosis"],
           answer: "B. Increased cell division will lead to the formation of a tumor",
           explanation: "Growth factors are important signaling molecules that trigger cells to divide at the correct rate and correct time. An EGFR that is active when a growth factor is absent would lead to increased cell division. Uncontrolled cell growth will likely result in a tumor.   "
      },
      {
        id: '4.5.2',
        question: "The tumor suppressor protein p53 binds to DNA and activates target genes, which results in the synthesis of p21, CD95, and other proteins. The p21 protein promotes cell-cycle arrest, whereas the CD95 protein promotes apoptosis. Which of the following will most likely result from a loss of p53 function?",
        options: ["A. Rapid cell growth without cell division", 
                    "B. Immediate activation of apoptosis pathways", 
                    "C. Uncontrolled cell proliferation", 
                    "D. Increased expression of p53 target genes"],
           answer: "C. Uncontrolled cell proliferation",
           explanation: "A loss of p53 function will result in unregulated cell proliferation because the p21 protein will not be synthesized. In the absence of the p21 protein, a cell will continue to progress through the cell cycle without stopping. "
      },
      {
        id: '4.5.3',
        question: "Figure 1 represents the relative time and sequence of the phases of the cell cycle. Which statement best predicts why a cell’s progression through the cell cycle might be halted at the G1 / S checkpoint?  ",
        image: "/MCQ/4.5.3.png",
        options: ["A. Spindle fibers have not correctly attached to chromosomes", 
                    "B. There are not enough nucleotides available to construct new DNA", 
                    "C. Damage occurred to DNA when it was being copied in G1  ", 
                    "D. Proteins necessary for M phase of the cell cycle have not been produced"],
           answer: "B. There are not enough nucleotides available to construct new DNA",
           explanation: "DNA replication, which occurs during S phase, requires free nucleotides. If nucleotides are unavailable, the G1/S checkpoint halts the cell cycle to conserve energy.  "
      },
      {
        id: '4.5.4',
        question: "4. Glycogen synthetase kinase 3 beta is a protein kinase that has been implicated in many types of cancer. Depending on the cell type, the gene for glycogen synthetase kinase 3 beta (GSK3β) can act either as an oncogene or as a tumor suppressor. Which of the following best predicts how GSK3β mutations can lead to the development of cancer?  ",
        options: ["A. Cells with inactive GSK3β fail to trigger apoptosis", 
                    "B. Cells with inactive GSK3β fail to proceed past the \(G_2\)/M checkpoint", 
                    "C. Cells with overactive GSK3β are more likely to repair DNA damage  ", 
                    "D. Cells with overactive GSK3β have longer cell cycles"],
           answer: "A. Cells with inactive GSK3β fail to trigger apoptosis",
           explanation: "If apoptosis cannot be initiated in cells with GSK3β mutations, those cells are more likely to proliferate, which could lead to cancer."
      },
    ]
  },
  unit6_1: {
    sectionA: [
      {
        id: '6.1.1',
        question: " Erwin Chargaff investigated the nucleotide composition of DNA. He analyzed DNA from various organisms and measured the relative amounts of adenine (A), guanine (G), cytosine (C), and thymine (T) present in the DNA of each organism. Table 1 contains a selected data set of his results. Which of the following statements best explains the data set?  ",
        image: "/MCQ/6.1.1.png",
        options: ["A. Since the %A and the %G add up to approximately 50 percent in each sample, adenine and guanine molecules must pair up in a double-stranded DNA molecule.  ", 
                    "B. Since the %A and the %T are approximately the same in each sample, adenine and thymine molecules must pair up in a double-stranded DNA molecule.  ", 
                    "C. Since the %(A+T) is greater than the %(G+C) in each sample, DNA molecules must have a poly-A tail at one end.  ", 
                    "D. Since the %C and the %T add up to approximately 50 percent in each sample, cytosine and thymine molecules must both contain a single ring."],
           answer: "B. Since the %A and the %T are approximately the same in each sample, adenine and thymine molecules must pair up in a double-stranded DNA molecule.",
           explanation: "The percentages of adenine and thymine are approximately the same because adenine aligns with thymine in double-stranded DNA and they are therefore present in each organism in the same amounts.  "
      },
      {
        id: '6.1.2',
        question: "Which of the following statements best explains the structure and importance of plasmids to prokaryotes?",
        options: ["A. Plasmids are circular, single-stranded RNA molecules that transfer information from the prokaryotic chromosome to the ribosomes during protein synthesis. ", 
                    "B. Plasmids are circular, double-stranded DNA molecules that provide genes that may aid in survival of the prokaryotic cell.  ", 
                    "C. Plasmids are single-stranded DNA molecules, which are replicated from the prokaryotic chromosome, that prevent viral reproduction within the prokaryotic cell.", 
                    "D. Plasmids are double-stranded RNA molecules that are transmitted by conjugation that enable other prokaryotic cells to acquire useful genes.  "],
           answer: "B. Plasmids are circular, double-stranded DNA molecules that provide genes that may aid in survival of the prokaryotic cell.  ",
           explanation: "Plasmids are small, circular, double-stranded DNA molecules. Plasmids can be acquired and can be replicated by prokaryotes. Plasmids may carry genes, such as antibiotic resistance genes, that may help the prokaryote survive.  "
      },
      {
        id:  '6.1.3',
        question: "3. Antibiotics can be used to kill the specific pathogenic bacterium, Mycobacterium tuberculosis, that causes tuberculosis. The appearance of antibiotic-resistant strains has made it more difficult to cure M. tuberculosis infections. These antibiotic-resistant bacteria survive and pass on the genes to their offspring, making the resistant phenotype more common in the population. DNA analysis indicates that the genes for antibiotic resistance are not normally present in bacterial chromosomal DNA.  Which of the following statements best explains how the genes for antibiotic resistance can be transmitted between bacteria without the exchange of bacterial chromosomal DNA?  ",
        options: ["A. The antibiotic-resistant bacteria release a hormone that signals neighboring bacteria to become resistant.", 
                    "B. The genes for antibiotic resistance are located on a plasmid that can be passed to neighboring bacteria.  ", 
                    "C. The antibiotic-resistant bacteria are the result of bacteria that specifically modify their own chromosomal DNA to neutralize the antibiotics.  ", 
                    "D. The antibiotic alters the bacterial genome of each bacterium, which results in an antibiotic-resistant population.  "],
           answer: "B. The genes for antibiotic resistance are located on a plasmid that can be passed to neighboring bacteria.  ",
           explanation: "Bacteria can exchange and express the genes found on plasmids, which are foreign, extrachromosomal loops of DNA that they pick up. Genes for antibiotic resistance are located on these plasmids.  "
      },
      {
        id: '6.1.4',
        question: " 4. The genome of a newly discovered virus has the following nucleotide composition: 22% guanine, 16% cytosine, 34% adenine, and 28% uracil. Based on the nucleotide composition, the genome of this virus is most likely made of which of the following?  ",
        options: ["A.  single-stranded DNA", 
                    "B. double-stranded DNA", 
                    "C. single-stranded RNA", 
                    "D. double-stranded RNA"],
           answer: "C. single-stranded RNA",
           explanation: " Since the question states that the virus’s genome contains uracil, choices (C) and (D) are possibilities since RNA contains uracil and DNA does not; thus, rule out choices (A) and (B). However, since the percentage of guanine does not equal the percentage of cytosine and the percentage of adenine does not equal the percentage of uracil, it cannot be a double-stranded virus, so choice (C) is the best answer."
      },
    ]
  },
  unit6_2: {
    sectionA: [
      {
        id: '6.2.1',
        question: "A model of a process involving nucleic acids is shown in Figure 1. Figure 1. Model of a process involving nucleic acids. Which of the following best explains what process is represented in Figure 1 ?   ",
        image: "/MCQ/6.2.1.png",
        options: ["A. New DNA strands are being synthesized in the 3' to 5' direction from their DNA templates.", 
                    "B. New DNA strands are being synthesized in the 5' to 3' direction from their DNA templates.", 
                    "C. A new RNA strand is being synthesized in the 3' to 5' end from its DNA template.", 
                    "D. Two new RNA strands are being synthesized in both directions from their DNA templates."],
           answer: "B. New DNA strands are being synthesized in the 5' to 3' direction from their DNA templates.  ",
           explanation: "New DNA strands are synthesized in the 5' to 3' direction from the DNA template, and this is depicted in the diagram. The leading strand is being synthesized on the bottom, while the lagging strand is being synthesized in fragments on top.  "
      },
      {
        id: '6.2.2',
        question: "Figure 1 shows some relevant details of a model of how a deoxynucleotide, in this case dTMP, is added to a growing strand of DNA. Figure 1. Model showing details of adding a deoxythymidine monophosphate (dTMP) nucleotide to a growing strand of DNA. The features of this model provide evidence for which explanation of why all growing strands are synthesized in a 5′ to 3′ direction?  ",
        image: "/MCQ/6.2.2.png",
        options: ["A. The two strands need to be antiparallel to bond properly.  ", 
                    "B. Thymine and adenine would not bond properly if the strand grew from 3' to 5'.  ", 
                    "C. The translation of mRNA occurs in the 5' to 3' direction; therefore, the growing DNA strand must also grow in the 5' to 3' direction.", 
                    "D. The phosphate group, attached to the 5' carbon of the dTMP, forms a covalent bond with the oxygen atom attached to the 3' carbon of the growing strand. "],
           answer: "D. The phosphate group, attached to the 5' carbon of the dTMP, forms a covalent bond with the oxygen atom attached to the 3' carbon of the growing strand. ",
           explanation: " Synthesizing a growing strand requires the interaction of the phosphate groups found at the 5' location on the new deoxynucleotide with the OH group attached to the 3' carbon of the existing end of the growing strand. These specific interactions and the release of diphosphate explain the directionality requirement for a growing strand of DNA.  "
      },
      {
        id: '6.2.3',
        question: " Figure 1. illustrates a model of the molecules involved in DNA replication and their placement relative to each other. Which of the following correctly explains where DNA replication will begin on the strand oriented 5'→3', reading from left to right?  ",
        image: "/MCQ/6.2.3.png",
        options: ["A. DNA replication will be randomly initiated along the unwound portion of the DNA strand since base pairing will occur.  ", 
                    "B. DNA replication cannot occur since there is already RNA base pairing with the template strand.  ", 
                    "C. DNA replication will be initiated immediately to the left of the RNA, since DNA polymerase requires an RNA primer.", 
                    "D. DNA replication will be initiated at the site of the topoisomerase since that is where DNA begins to uncoil. "],
           answer: "C. DNA replication will be initiated immediately to the left of the RNA, since DNA polymerase requires an RNA primer.",
           explanation: "The RNA primer marks the beginning of DNA synthesis in the 5' to 3' direction. There is only one RNA primer present on the top strand in the diagram so DNA replication will begin there.  "
      },
      {
        id: '6.2.4',
        question: "N-15, also known as heavy nitrogen, is an isotope of nitrogen that is heavier than the isotope that is typically found in nature, N-14. Conducting chemical reactions in the presence of different isotopes of nitrogen allow a scientist to follow nitrogen atoms in a metabolic pathway. In a classic experiment, Meselson and Stahl allowed parent DNA (containing N-15) to replicate in the presence of N-14. After one round of DNA replication, which of the following results would support the statement “DNA replication is semiconservative”?",
        options: [
          "A. The DNA molecules will contain both N-14 and N-15.",
          "B. The DNA molecules will contain only N-14.",
          "C. The DNA molecules will contain only N-15.",
          "D. The DNA molecules will contain N-15 in one strand and N-14 in the other strand."
        ],
        answer: "D. The DNA molecules will contain N-15 in one strand and N-14 in the other strand.",
        explanation: "If DNA replication is semiconservative, each new DNA molecule will contain one old strand (with N-15) and one new strand (with N-14). This can only be observed after one round of replication if the DNA is composed of one strand of each isotope."
      },
    ]
  },
  unit6_3: {
    sectionA: [
      {
        id: '6.3.1',
        question: "A model that represents a process occurring in a cell of a particular organism is shown in Figure 1. Which of the following correctly explains the process shown in Figure 1? ",
        image: "/MCQ/6.3.1.png",
        options: ["A. DNA replication is occurring because replication is semi-conservative and the new strand is a copy of the template strand", 
                    "B. Initiation of transcription is occurring because a strand of RNA is being produced from a DNA template strand.", 
                    "C. Translation is occurring because the two strands have separated and a new strand is being produced.", 
                    "D. Alternative splicing of mRNA is occurring because the mRNA strand is being synthesized from only one strand of DNA."],
           answer: "B. Initiation of transcription is occurring because a strand of RNA is being produced from a DNA template strand.",
           explanation: "Transcription is occurring. Since uracil (U) is present in the new strand being formed, RNA is being formed from a DNA template.  "
      },
      {
        id: '6.3.2',
        question: "2. Figure 1 represents part of a process that occurs in eukaryotic cells. There are untranslated regions (UTR) in this sequence. Which of the following best explains the process represented by Figure 1? ",
        image: "/MCQ/6.3.2.png",
        options: ["A. The synthesis of mRNA in the 5' to 3' direction from DNA", 
                    "B. The modification of a protein to produce a functional form of that protein", 
                    "C. The translation of an mRNA molecule into a polypeptide", 
                    "D. The enzyme-regulated processing of pre-mRNA into mature mRNA"],
           answer: "D. The enzyme-regulated processing of pre-mRNA into mature mRNA ",
           explanation: "The removal of introns and the addition of a 3' poly-A tail and a 5'GTP cap are associated with mRNA processing in eukaryotic cells, and the diagram reflects these changes. "
      },
      {
        id: '6.3.3',
        question: "Figure 1 represents part of a process essential to gene expression. Which of the following best explains what strand X represents?  ",
        image: "/MCQ/6.4.3.png",
        options: ["A. A complementary RNA sequence, because it contains thymine  ", 
                    "B. The coding strand in this process, because it is being read 3' to 5'", 
                    "C. The antisense strand, because it is serving as a template  ", 
                    "D. The pre-mRNA, because it does not yet have a GTP cap  "],
           answer: "C. The antisense strand, because it is serving as a template   ",
           explanation: "Strand X is serving as the template strand for the synthesis of a complementary strand of RNA. The template strand is also called the antisense strand.  "
      },
      {
        id: '6.3.4',
        question: "Which of the following correctly represents the mRNA sequence that would be transcribed from the DNA sequence 3' ACC GGT AAG TTC 5'?",
        options: ["A. 3' TGG CCA TTC AAG 5'", 
                    "B. 3' UGG CCA UUC AAG 5'", 
                    "C. 5' TGG CCA TTC AAG 3'", 
                    "D. 5' UGG CCA UUC AAG 3'"],
           answer: "D. 5' UGG CCA UUC AAG 3' ",
           explanation: "The transcribed mRNA would be antiparallel to the given DNA sequence, so it would start with the 5' end. Also, in RNA, uracil replaces thymine, and the other base-pairing rules are the same as those found in DNA. Choices (A) and (B) are incorrect because the mRNA is not antiparallel to the DNA sequence. Choices (A) and (C) are incorrect because they contain thymine, which does not appear in RNA."
      },
    ]
  },
  unit6_4: {
    sectionA: [
      {
        id: '6.4.1',
        question: "1. Molecular biologists are studying the processes of transcription and translation and have found that they are very similar in prokaryotes and eukaryotes, as summarized in Table 1.  Based on the information in Table 1, which of the following best predicts a key difference in prokaryotes and eukaryotes with regard to transcription and translation? ",
        image: "/MCQ/6.4.1.png",
        options: ["A. The two processes will occur simultaneously in prokaryotes but not eukaryotes.  ", 
                    "B. Prokaryotic mRNA is shorter than eukaryotic mRNA.", 
                    "C. Eukaryotic mRNA contains more coding regions than prokaryotic DNA.", 
                    "D. The processing of mRNA by eukaryotes is required for the mRNA to leave the nucleus.  "],
           answer: "A. The two processes will occur simultaneously in prokaryotes but not eukaryotes.  ",
           explanation: " Since transcription and translation both occur in the cytoplasm, they can occur simultaneously in prokaryotes. Note that the spatial separation of these two processes in eukaryotes increases the capacity for gene regulation.  "
      },
      {
        id: '6.4.2',
        question: "2. Antibiotics interfere with prokaryotic cell functions. Streptomycin is an antibiotic that affects the small ribosomal subunit in prokaryotes. Specifically, streptomycin interferes with the proper binding of tRNA to mRNA in prokaryotic ribosomes. Which of the following best predicts the most direct effect of exposing prokaryotic cells to streptomycin? ",
        options: ["A. Amino acid synthesis will be inhibited", 
                    "B. No mRNA will be transcribed from DNA", 
                    "C. Posttranslational modifications will be prevented", 
                    "D. Synthesis of polypeptides will be inhibited"],
           answer: "D. Synthesis of polypeptides will be inhibited ",
           explanation: "Translation of mRNA involves assembling polypeptides from amino acids attached to tRNA specific for each amino acid. Streptomycin prevents the ribosome from interacting properly with tRNA, preventing the synthesis of needed proteins and leading to the death of the prokaryote.  "
      },
      {
        id: '6.4.3',
        question: "3. What would be the minimum number of nucleotides required to code for a protein made of 12 amino acids?  ",
        options: ["A. 6", 
                    "B. 12", 
                    "C. 36", 
                    "D. 48"],
           answer: "C. 36",
           explanation: "Each amino acid is coded by a three base pair codon, so a protein made of 12 amino acids would require a minimum of 12 * 3 = 36 nucleotides. Choice (A) is incorrect because 6 nucleotides would only contain two codons. Since 3 nucleotides are required to make a codon, 12 nucleotides would only be sufficient to code for four amino acids, so choice (B) is incorrect. While 48 nucleotides might code for 12 amino acids if there were introns to be removed, 48 is not the minimum number of nucleotides required, so choice (D) is incorrect."
      },
    ]
  },
  unit6_56: {
    sectionA: [
      {
        id: '6.5.1',
        question: "A repressible operon in bacteria codes for the genes required to produce the amino acid serine. Serine functions as a corepressor for the operon. If serine is present in the bacteria's environment, which of the following is most likely?  ",
        options: ["A. increased digestion of serine", 
                    "B. increase in the levels of serine", 
                    "C. increased production of the repressor protein", 
                    "D. increased binding of the repressor protein to the operator"],
           answer: "D. increased binding of the repressor protein to the operator",
           explanation: "Corepressors help the repressor protein bind to the operator. Since serine is a corepressor, its presence would result in increased binding of the repressor protein to the operator. Choice (A) is incorrect because repressible operons are usually anabolic, not catabolic, in function and thus they would not be involved in the digestion of serine. Since serine functions as a corepressor, the presence of serine would reduce the expression of the operon and would not result in increased levels of serine. Thus, choice (B) is incorrect. The presence of the corepressor does not affect the production of the repressor protein, so choice (C) is incorrect.  "
      },
      {
        id: '6.5.2',
        question: "The arabinose operon is an inducible operon that codes for the genes required to digest the sugar arabinose. Arabinose functions as an inducer molecule for the operon. If arabinose is present in the bacteria’s environment, which of the following is most likely?  ",
        options: ["A. increased digestion of arabinose", 
                    "B. increase in the levels of arabinose ", 
                    "C. increased production of the repressor protein", 
                    "D. increased binding of the repressor protein to the operator"],
           answer: "A. increased digestion of arabinose",
           explanation: "In inducible operons, the inducer molecule binds to the repressor protein, which prevents the repressor protein from binding to the operator, increasing the level of expression of the operon. Choice (B) is incorrect because inducible operons are usually catabolic, not anabolic, and would not be involved in the production of arabinose. The presence of the inducer does not affect the production of the repressor protein, so choice (C) is incorrect. The presence of the inducer results in decreased binding of the repressor protein to the operator, so choice (D) is also incorrect.  "
      },
      {
        id: '6.5.3',
        question: "Which sequences in bacterial operons are noncoding sequences?",
        options: ["A. operators and promoters only ", 
                    "B. operators, promoters, and genes for regulatory proteins", 
                    "C. operators, promoters, and genes for structural proteins", 
                    "D. promoters, genes for regulatory proteins, and genes for structural proteins"],
           answer: "A. operators and promoters only",
           explanation: "The operators and promoters of operons both serve as noncoding sequences to which regulatory proteins bind. Repressor proteins bind to the operator, and RNA polymerase binds to the promoter. Genes for both regulatory proteins and structural proteins contain sequences that code for proteins, so choices (B), (C), and (D) are incorrect."
      },
      {
        id: '6.5.4',
        question: "Which of the following is a key difference between inducible operons and repressible operons?",
        options: ["A. Inducible operons have promoter sequences, and repressible operons do not have promoter sequences.  ", 
                    "B. Inducible operons have operator sequences, and repressible operons do not have operator sequences.  ", 
                    "C. The repressor in an inducible operon can bind to the operator sequence on it own, but the repressor in a repressible operon requires a corepressor in order to bind to the operator. ", 
                    "D. In inducible operons, RNA polymerase requires the presence of a corepressor in order to bind to the promoter; in repressible operons, RNA polymerase does not require a corepressor."],
           answer: "C. The repressor in an inducible operon can bind to the operator sequence on it own, but the repressor in a repressible operon requires a corepressor in order to bind to the operator.  ",
           explanation: "In inducible operons, repressor proteins can bind to the operator without the assistance of a corepressor. In repressible operons, the presence of a corepressor is required in order for the repressor protein to bind to the operator sequence. Choice (A) is incorrect because both inducible and repressible operons have promoter sequences. Operator sequences are present in both inducible and repressible operons, so choice (B) is incorrect. RNA polymerase does not require a corepressor in order to bind to the promoter in both inducible and repressible operons, so choice (D) is incorrect. "
      },
      {
        id: '6.5.5',
        question: " Which of the following are proteins in eukaryotes that bind to regulatory switches and upregulate gene expression?   ",
        options: ["A. activators", 
                    "B. repressors", 
                    "C. transcription factors", 
                    "D. mediators"],
           answer: "A. activators",
           explanation: "Activators are proteins in eukaryotes that bind to regulatory switches and upregulate gene expression. Choice (B) is incorrect because repressors downregulate gene expression. Transcription factors help RNA polymerase bind to the promoter and do not bind to regulatory switches, so choice (C) is incorrect. Mediators are proteins that allow communication between the regulatory proteins involved in gene expression; they do not bind to regulatory switches, so choice (D) is incorrect.  "
      },
      {
        id: '6.5.6',
        question: "Not every change in the DNA sequence results in a change in the amino acid sequence of a protein. Which of the following explains this?   ",
        options: ["A. Each organism lives in a different environment, which changes the expression of its genes. ", 
                    "B. The genetic code is redundant, and more than one codon codes for most amino acids.", 
                    "C. The proofreading function of ribosomes corrects changes in the DNA sequence.", 
                    "D. Differential gene expression adapts to these changes in the DNA sequence.  "],
           answer: "B. The genetic code is redundant, and more than one codon codes for most amino acids.",
           explanation: "The genetic code contains more than one codon for most amino acids, so a change in a codon does not necessarily result in a change in the amino acid for which it codes. While changes in the environment can affect the expression of genes, the statement in choice (A) does not explain why changes in the DNA sequence may not result in changes in the amino acid found in the final protein. Thus, choice (A) is incorrect. Ribosomes do not have a proofreading function, so choice (C) is incorrect. Differential gene expression results in cell differentiation but not changes in the DNA sequence, so choice (D) is incorrect.  "
      },
      {
        id: '6.5.7',
        question: "Which of the following does not affect the phenotype of an organism?  ",
        options: ["A. the genes that are expressed", 
                    "B. the level at which genes are expressed", 
                    "C. the timing of gene expression", 
                    "D. the number of genes in the organism"],
           answer: "D. the number of genes in the organism",
           explanation: " The phenotype of an organism is determined by the genes that are expressed, the level of expression of those genes, and the timing of the expression of those genes. The phenotype is not affected by the number of genes in the organism, so choice (D) is the only choice that does not affect the phenotype of an organism.  "
      },
    ]
  },
  unit6_7: {
    sectionA: [
      {
        id: '6.7.1',
        question: "Which of the following methods of horizontal transmission of genetic material would be most likely to lead to new variants of the COVID- 19 virus?  ",
        options: ["A. transformation", 
                    "B. transduction", 
                    "C. transposition", 
                    "D. conjugation"],
           answer: "B. transduction",
           explanation: "Transduction involves the transfer of genetic material by viral transmission. Transformation, transposition, and conjugation do not involve viruses, so choices (A), (C), and (D) are incorrect.  "
      },
      {
        id: '6.7.2',
        question: "Which of the following is a reasonable hypothesis to explain why mutant 1 did not produce β-galactosidase in the presence or absence of lactose?  ",
        options: ["A. The β-galactosidase gene had a mutation that produced an early stop codon in the mRNA.  ", 
                    "B. Mutant 1 is unable to metabolize glucose and galactose.", 
                    "C. Mutant 1 is unable to break down lactose.  ", 
                    "D. Mutant 1 prefers glucose, but will use lactose when no other substrate is available.  "],
           answer: "A. The β-galactosidase gene had a mutation that produced an early stop codon in the mRNA",
           explanation: "The data for the wild-type suggests that β-gal expression in inducible. The presence of lactose induces the synthesis of β-gal, the enzyme that breaks down lactose. The fact that mutant 1 cannot make β-gal in the presence of lactose suggests that either the protein is not made (or it is made in a non-functional form). If a mutant never expresses a gene, it is likely that there is a mutation in the gene sequence or in the regulatory region (the promoter/operator) of the gene. (Please see preceding table.) Since the latter is not an answer option, the former must be true. Choice A is a type of mutation that would prevent a protein from being produced in a c ell. Choice B is incorrect because the bacteria were grown in a glucose medium before lactose was added. Choice C is true, but it is does not explain why mutant 1 did not produce β- gal; it states the consequence of the inability of mutant 1 to express β-gal in the presence of lactose (mutant 1 can’t break down lactose because it doesn’t express β-gal). There is no indication in the data that choice D is true.  "
      },
      {
        id: '6.7.3',
        question: "About 98% of the volume of red blood cells is occupied by the protein hemoglobin. Hemoglobin is a protein that carries oxygen from the lungs to the tissues. It is composed of four subunits—two identical α subunits and two identical β subunits. Sickle-cell anemia is a heritable disease that results from a point mutation in the hemoglobin-β (HBB) gene. The mutant gene contains a thymine base instead of an adenine base and causes a missense mutation (an amino acid substitution). The mutant polypeptide contains a valine, a nonpolar amino acid, on the exterior surface of the polypeptide in the position occupied by glutamic acid in the wild-type protein. Which of the following is the most likely result of the mutation?",
        options: ["A. abnormal DNA structure as a result of non complementary base pairing", 
                    "B. altered protein properties resulting from abnormal interactions between hemoglobin molecules in red blood cells  ", 
                    "C. altered protein structure resulting from abnormal hydrophobic interactions between amino acid backbones",
                    "D. altered red blood cell function resulting from an acid-base reaction between the mutant hemoglobin and the red blood cell membrane"],
           answer: "B. altered protein properties resulting from abnormal interactions between hemoglobin molecules in red blood cells  ",
           explanation: "Red blood cells contain a large amount of the hemoglobin protein, so any mutation on the surface of the protein could interfere with interactions between hemoglobin molecules within the cell. Choice A is incorrect because the base substitution of adenine to thymine would result in the placement of adenine to the complementary strand of DNA during replication. Choice C is incorrect because there are no hydrophobic interactions that occur between the amino acid backbones. Choice D is incorrect because glutamic acid was replaced with valine, not the other way around, so no “acid-base” reaction would occur between the red blood cell membrane and the hemoglobin surface.  "
      },
      {
        id: '6.7.4',
        question: " 4. About 98% of the volume of red blood cells is occupied by the protein hemoglobin. Hemoglobin is a protein that carries oxygen from the lungs to the tissues. It is composed of four subunits—two identical α subunits and two identical β subunits. Sickle-cell anemia is a heritable disease that results from a point mutation in the hemoglobin-β (HBB) gene. The mutant gene contains a thymine base instead of an adenine base and causes a missense mutation (an amino acid substitution). The mutant polypeptide contains a valine, a nonpolar amino acid, on the exterior surface of the polypeptide in the position occupied by glutamic acid in the wild-type protein.  Which of the following true statements most accurately and comprehensively describes how a single base-pair substitution in a polypeptide can have massive effects on a phenotype?  ",
        options: ["A. Hemoglobin is an abundant protein in the body", 
                    "B. Hemoglobin is the most abundant protein in red blood cells.  ", 
                    "C. The alteration in the protein causes oxygen transport to be compromised.", 
                    "D. People that are heterozygous for sickle-cell anemia are resistant to malaria"],
           answer: "C. The alteration in the protein causes oxygen transport to be compromised. ",
           explanation: "Red blood cells are the only cells in the human body that cannot use oxygen. Fast-twitch muscle fibers can work anaerobically for short periods of time, but otherwise all cells in the body need a constant supply of oxygen to function."
      },
    ]
  },
  unit6_8: {
    sectionA: [
      {
        id: '6.8.1',
        question: "Which of the following is used to cut DNA at specific base pair sequences?  ",
        options: ["A. DNA ligase", 
                    "B. gel electrophoresis", 
                    "C. polymerase chain reaction", 
                    "D. restriction enzymes"],
           answer: "D. restriction enzymes",
           explanation: "Restriction enzymes (also known as restriction endonucleases) cut DNA at specific base pair sequences. DNA ligase connects pieces of DNA, so choice (A) is incorrect. Choice (B) is incorrect because gel electrophoresis is used to separate DNA fragments according to their size. Polymerase chain reaction (PCR) is used to amplify specific sequences of DNA, so choice (C) is incorrect.  "
      },
      {
        id: '6.8.2',
        question: "A forensic scientist cuts DNA from a crime scene and DNA from a suspect with the same enzyme. Which tool should the scientist use to separate the DNA fragments according to their size?  ",
        options: ["A. bacterial transformation", 
                    "B. CRISPR-Cas9", 
                    "C. gel electrophoresis", 
                    "D. polymerase chain reaction"],
           answer: "C. gel electrophoresis",
           explanation: "Gel electrophoresis separates fragments of DNA according to their size. Bacterial transformation involves the uptake and expression of foreign DNA by bacteria, so choice (A) is incorrect. CRISPR-Cas9 is used for gene editing, so choice (B) is incorrect. PCR amplifies specific sequences of DNA, so choice (D) is incorrect. "
      },
      {
        id: '6.8.3',
        question: "A scientist at a pharmaceutical company wants to create bacteria that will synthesize human growth hormone. What should the scientist use to add the DNA code for human growth hormone to a plasmid?  ",
        options: ["A. bacterial transformation", 
                    "B. DNA ligase", 
                    "C. gel electrophoresis", 
                    "D. polymerase chain reaction"],
           answer: "B. DNA ligase",
           explanation: "DNA ligase attaches DNA fragments together, joining them with phosphodiester bonds. Choice (A) is incorrect because bacterial transformation is used to insert naked, foreign DNA into a cell. Gel electrophoresis separates DNA fragments by size, so choice (C) is incorrect. Polymerase chain reaction is used to amplify the number of copies of a specific sequence of DNA, so choice (D) is incorrect. "
      },
      {
        id: '6.8.4',
        question: "A scientist at a pharmaceutical company wants to create bacteria that will synthesize human growth hormone. The scientist has successfully created a plasmid that contains the DNA code for the human growth hormone gene. Which technique should the scientist use to insert the plasmid into a cell?  ",
        options: ["A. bacterial transformation", 
                    "B. CRISPR-Cas9", 
                    "C. gel electrophoresis", 
                    "D. polymerase chain reaction"],
           answer: "A. bacterial transformation",
           explanation: "Bacterial transformation inserts naked, foreign DNA into a bacterial cell. CRISPR-Cas9 is used for gene editing, not inserting plasmids into a cell, so choice (B) is incorrect. Choice (C) is incorrect because gel electrophoresis is used to separate DNA fragments according to their size. Polymerase chain reaction is used to amplify the number of copies of a specific DNA sequence, so choice (D) is incorrect"
      },
    ]
  }
};

export default function MCQ({children}: {children: string}) {
  // Map the children string to the correct key in questionData
  const keyMap: Record<string, string> = {
    "2.1": "unit2_1",
    "2.2": "unit2_2",
    "2.3": "unit2_3",
    "2.4": "unit2_4",
    "2.5": "unit2_5",
    "2.6": "unit2_6",
    "2.7": "unit2_7",
    "4.1": "unit4_1",
    "4.2": "unit4_2",
    "4.3": "unit4_3",
    "4.4": "unit4_4",
    "4.5": "unit4_5",
    "6.1": "unit6_1",
    "6.2": "unit6_2",
    "6.3": "unit6_3",
    "6.4": "unit6_4",
    "6.5-6.6": "unit6_56",
    "6.7": "unit6_7",
    "6.8": "unit6_8"
  };

  const unitKey = keyMap[children];
  const questions =
    unitKey && (questionData as Record<string, { sectionA: any[] }>)[unitKey]
      ? (questionData as Record<string, { sectionA: any[] }>)[unitKey].sectionA
      : [];

  return (
    <div>
      {questions.map((q) => {
        const [show, setShow] = useState(false);
        return (
          <div key={q.id} style={{marginBottom: "2em"}}>
            <div><strong>{q.question}</strong></div>
            {q.image && (
              <>
                <br />
                <Image
                  src={require(`../public${q.image}`)}
                  alt=""
                  style={{ maxWidth: "100%", height: "auto" }}
                  width={600}
                  height={400}
                />
              </>
            )}
            <ul>
              {q.options.map((opt: string, idx: number) => (
                <li key={idx}>{opt}</li>
              ))}
            </ul>
            <button
              style={{
                background: "#ede9fe",
                color: "#7c3aed",
                border: "1px solid #a889bb",
                borderRadius: "4px",
                padding: "0.3em 1em",
                marginBottom: "0.5em",
                marginTop: "0.7em",
                cursor: "pointer"
              }}
              onClick={() => setShow((prev) => !prev)}
            >
              {show ? "Hide Answer" : "Check Answer"}
            </button>
            {show && (
              <>
                <div style={{color: "#a889bb"}}><em>Answer:</em> {q.answer}</div>
                <div style={{color: "#c2b2cc"}}><em>Explanation:</em> {q.explanation}</div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}
*/