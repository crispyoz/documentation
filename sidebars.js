/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  docsSidebar: [
    'intro',
    'installing-firmware',
    {
      type: 'category',
      label: 'Networking',
      items: [
        'networking/ethernet',
        'networking/wifi',
      ],
    },
    {
      type: 'category',
      label: 'Hardware Interfaces',
      items: [
        'hardware-interfaces/external-storage',
        'hardware-interfaces/i2c',
        'hardware-interfaces/spi',
        'hardware-interfaces/gpio',
        'hardware-interfaces/pin-multiplexing',
        'hardware-interfaces/pwm',
        {
          type: 'category',
          label: 'Additional Hardware',
          collapsed: false,
          items: [
            'hardware-interfaces/ledchain',
            'hardware-interfaces/omega2-lte',
          ]
        },
      ],
    },
    {
      type: 'category',
      label: 'Device Tree Overlay',
      link: {
        type: 'doc',
        id: 'device-tree-overlay/intro'
      },
      items: [
        'device-tree-overlay/software-spi',
        'one-wire-devices'
      ],
    },
    {
      type: 'category',
      label: 'Software',
      items: [
        'software/node',
      ],
    },
    {
      type: 'category',
      label: 'Packages',
      link: {
        type: 'doc',
        id: 'packages/intro'
      },
      items: [
        'device-tree-overlay/software-spi', // added this as a place holder - cannot have an empty category
      ],
    },
    {
      type: 'category',
      label: 'Firmware',
      items: [
        'firmware/how-to-build-firmware',
      ],
    },
    'feedback',
  ],
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

module.exports = sidebars;
