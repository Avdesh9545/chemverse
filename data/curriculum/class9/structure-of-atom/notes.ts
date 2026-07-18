// =============================================
// Class IX
// Chapter 4 - Structure of the Atom
// Notes
// =============================================

import { NoteSection } from "../../types";

export const notes: NoteSection[] = [
  {
    id: "introduction",
    title: "1. Introduction",
    content: `
# Introduction

Everything around us is made up of atoms. Scientists were curious to know whether atoms themselves had an internal structure. Through several experiments, they discovered that atoms are made up of smaller particles called subatomic particles.

# Learning Objectives

After studying this chapter, you will be able to:

• Identify subatomic particles.
• Explain the discoveries of electron, proton and neutron.
• Compare Thomson's, Rutherford's and Bohr's atomic models.
• Write electronic configurations.
• Differentiate between atomic number and mass number.
• Understand isotopes and isobars.

# Exam Tip

This chapter forms the foundation of modern Chemistry.

# Quick Recap

✓ Atom → Subatomic Particles → Atomic Models
`,
  },

  {
    id: "charged-particles",
    title: "2. Charged Particles in Matter",
    content: `
# Subatomic Particles

Atoms are made up of three fundamental particles:

• Electron (negative charge)
• Proton (positive charge)
• Neutron (no charge)

| Particle | Symbol | Charge | Relative Mass |
|----------|--------|--------|---------------|
| Electron | e⁻ | -1 | 1/1836 u |
| Proton | p⁺ | +1 | 1 u |
| Neutron | n⁰ | 0 | 1 u |

# Key Points

• Electrons revolve around the nucleus.
• Protons and neutrons are present inside the nucleus.

# Exam Tip

Remember:
Electron = Negative
Proton = Positive
Neutron = Neutral
`,
  },

  {
    id: "electron-discovery",
    title: "3. Discovery of Electron",
    content: `
# Scientist

J. J. Thomson

# Experiment

Cathode Ray Discharge Tube Experiment

# Observations

• Rays travelled from cathode to anode.
• Rays were deflected towards the positive plate.
• Therefore, they carried negative charge.

# Conclusion

Cathode rays consist of negatively charged particles called electrons.

# Importance

This was the first discovery of a subatomic particle.

# Exam Tip

Remember:

J. J. Thomson → Electron
`,
  },

  {
    id: "proton-discovery",
    title: "4. Discovery of Proton",
    content: `
# Scientist

Eugen Goldstein

# Experiment

Canal Ray Experiment

# Observations

• Canal rays moved opposite to cathode rays.
• They were positively charged.

# Conclusion

Positive particles called protons exist inside atoms.

# Exam Tip

Goldstein → Proton
`,
  },

  {
    id: "neutron-discovery",
    title: "5. Discovery of Neutron",
    content: `
# Scientist

James Chadwick

# Discovery

Neutrons were discovered in 1932.

# Characteristics

• No electric charge.
• Present inside nucleus.
• Mass nearly equal to proton.

# Importance

Neutrons explain isotopes of an element.

# Exam Tip

Chadwick → Neutron
`,
  },

  {
    id: "thomson-model",
    title: "6. Thomson's Model of Atom",
    content: `
# Plum Pudding Model

According to Thomson,

• Atom is a positively charged sphere.
• Electrons are embedded inside it.
• Total positive and negative charges are equal.

# Diagram (Concept)

Imagine a watermelon:

Positive sphere → Red portion

Electrons → Seeds

# Limitation

Could not explain Rutherford's experiment.

# Exam Tip

Nickname:
Plum Pudding Model
`,
  },

  {
    id: "rutherford-experiment",
    title: "7. Rutherford's Alpha Particle Scattering Experiment",
    content: `
# Experiment

Rutherford bombarded a thin gold foil with alpha particles.

# Observations

• Most particles passed straight through.
• Some were deflected.
• Very few bounced back.

# Conclusions

• Atom is mostly empty space.
• Positive charge is concentrated in a tiny nucleus.

# Importance

Rejected Thomson's model.

# Exam Tip

Gold Foil Experiment = Rutherford
`,
  },

  {
    id: "rutherford-model",
    title: "8. Rutherford's Nuclear Model",
    content: `
# Main Features

• Tiny positively charged nucleus.
• Electrons revolve around nucleus.
• Most of the atom is empty space.

# Limitation

Could not explain why electrons do not lose energy and fall into the nucleus.

# Exam Tip

Remember:

Tiny Nucleus

Large Empty Space
`,
  },

  {
    id: "bohr-model",
    title: "9. Bohr's Model of Atom",
    content: `
# Scientist

Niels Bohr

# Postulates

• Electrons revolve in fixed circular orbits.
• These orbits are called shells.
• Electrons do not radiate energy while moving in fixed shells.

# Shells

K

L

M

N

# Importance

Successfully explained stability of atoms.

# Exam Tip

Bohr introduced fixed energy levels.
`,
  },
    {
    id: "electronic-configuration",
    title: "10. Electronic Configuration",
    content: `
# Definition

The arrangement of electrons in different shells of an atom is called its electronic configuration.

# Maximum Number of Electrons

K Shell = 2

L Shell = 8

M Shell = 18

N Shell = 32

This follows the formula:

Maximum electrons = 2n²

where n = shell number.

# Examples

Sodium (11)

K = 2

L = 8

M = 1

Configuration = 2,8,1

Chlorine (17)

Configuration = 2,8,7

# Importance

Electronic configuration determines the chemical properties of an element.

# Common Mistake

Do not put more than 2 electrons in the K shell.

# Exam Tip

Remember:

K = 2

L = 8

M = 18

N = 32
`,
  },

  {
    id: "valency",
    title: "11. Valency",
    content: `
# Definition

Valency is the combining capacity of an atom.

# Rule

If the outermost shell contains:

1–4 electrons → Valency = Number of electrons.

5–8 electrons → Valency = 8 − Number of electrons.

# Examples

Na (2,8,1)

Valency = 1

O (2,6)

Valency = 2

Cl (2,8,7)

Valency = 1

# Importance

Valency helps in writing chemical formulae.

# Exam Tip

Valency depends on the outermost shell only.
`,
  },

  {
    id: "atomic-number",
    title: "12. Atomic Number",
    content: `
# Definition

Atomic number is the number of protons present in the nucleus of an atom.

It is represented by Z.

# Important Facts

• Every element has a unique atomic number.

• In a neutral atom,

Number of protons = Number of electrons.

# Examples

Hydrogen = 1

Carbon = 6

Oxygen = 8

Sodium = 11

# Exam Tip

Atomic Number = Protons
`,
  },

  {
    id: "mass-number",
    title: "13. Mass Number",
    content: `
# Definition

Mass number is the total number of protons and neutrons present in the nucleus.

Mass Number = Protons + Neutrons

It is represented by A.

# Example

Carbon-12

Protons = 6

Neutrons = 6

Mass Number = 12

# Exam Tip

Mass Number never includes electrons.
`,
  },

  {
    id: "isotopes",
    title: "14. Isotopes",
    content: `
# Definition

Isotopes are atoms of the same element having the same atomic number but different mass numbers.

# Examples

Hydrogen

Protium (¹H)

Deuterium (²H)

Tritium (³H)

Carbon

Carbon-12

Carbon-14

# Properties

• Same chemical properties.

• Different physical properties.

# Uses

• Carbon-14 → Dating fossils.

• Cobalt-60 → Cancer treatment.

• Iodine-131 → Thyroid disorders.

# Common Mistake

Atomic Number is SAME.

Mass Number is DIFFERENT.
`,
  },

  {
    id: "isobars",
    title: "15. Isobars",
    content: `
# Definition

Isobars are atoms of different elements having the same mass number but different atomic numbers.

# Examples

Calcium-40

Argon-40

# Properties

• Different chemical properties.

• Different atomic numbers.

# Exam Tip

Mass Number is SAME.

Atomic Number is DIFFERENT.
`,
  },

  {
    id: "applications",
    title: "16. Applications of Isotopes and Isobars",
    content: `
# Applications of Isotopes

• Cancer treatment (Cobalt-60)

• Medical diagnosis (Iodine-131)

• Dating archaeological remains (Carbon-14)

• Nuclear reactors (Uranium-235)

# Applications of Isobars

• Used in scientific research.

• Helpful in understanding nuclear reactions.

# Importance

Radioisotopes play an important role in medicine, agriculture and industry.
`,
  },

  {
    id: "chapter-summary",
    title: "17. Chapter Summary",
    content: `
# Chapter Summary

After studying this chapter, you should know:

• Discovery of electron, proton and neutron.

• Thomson's model.

• Rutherford's model.

• Bohr's model.

• Electronic configuration.

• Valency.

• Atomic Number.

• Mass Number.

• Isotopes.

• Isobars.

# One-Line Revision

Electron → Proton → Neutron → Atomic Models → Electronic Configuration → Valency → Atomic Number → Mass Number → Isotopes → Isobars

Congratulations!

You have completed Chapter 4: Structure of the Atom.
`,
  },
];