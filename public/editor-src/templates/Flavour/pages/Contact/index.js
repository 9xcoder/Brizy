module.exports = {
  id: "FlavourContact",
  thumbnailWidth: 680,
  thumbnailHeight: 644,
  title: "Contact", 
  keywords: "contact, location, addressflavour, Food, restaurant, catering, delivery, dining",
  cat: [0, 10],
  pro: true,
  resolve: { blocks:[
    {
        type: "Section",
        value: {
            _styles: [
                "section"
            ],
            items: [
                {
                    type: "SectionItem",
                    value: {
                        _styles: [
                            "section-item"
                        ],
                        items: [
                            {
                                type: "Wrapper",
                                value: {
                                    _styles: [
                                        "wrapper",
                                        "wrapper--map"
                                    ],
                                    items: [
                                        {
                                            type: "Map",
                                            value: {
                                                _styles: [
                                                    "map"
                                                ],
                                                height: 500,
                                                mobileHeight: 300
                                            }
                                        }
                                    ],
                                    marginTop: 0,
                                    marginTopSuffix: "px",
                                    margin: 0,
                                    marginBottom: 0,
                                    marginBottomSuffix: "px"
                                }
                            }
                        ],
                        padding: 0,
                        paddingTop: 0,
                        paddingBottom: 0,
                        containerType: "fullWidth"
                    }
                }
            ],
            _thumbnailSrc: 383239,
            _thumbnailWidth: 600,
            _thumbnailHeight: 160,
            _thumbnailTime: 1573727498286
        },
        blockId: "Blank000Light"
    },
    {
        type: "Section",
        value: {
            _styles: [
                "section"
            ],
            items: [
                {
                    type: "SectionItem",
                    value: {
                        _styles: [
                            "section-item"
                        ],
                        items: [
                            {
                                type: "Wrapper",
                                value: {
                                    _styles: [
                                        "wrapper",
                                        "wrapper--richText"
                                    ],
                                    items: [
                                        {
                                            type: "RichText",
                                            value: {
                                                _styles: [
                                                    "richText"
                                                ],
                                                text: "<p class=\"brz-text-lg-center brz-tp-heading6\"><span class=\"brz-cp-color2\">SEND US A MESSAGE</span></p>"
                                            }
                                        }
                                    ],
                                    marginBottom: 0,
                                    marginBottomSuffix: "px",
                                    margin: 0
                                }
                            },
                            {
                                type: "Wrapper",
                                value: {
                                    _styles: [
                                        "wrapper",
                                        "wrapper--richText"
                                    ],
                                    items: [
                                        {
                                            type: "RichText",
                                            value: {
                                                _styles: [
                                                    "richText"
                                                ],
                                                text: "<h1 class=\"brz-text-lg-center brz-tp-heading1\"><span class=\"brz-cp-color2\">Contact us now</span></h1>"
                                            }
                                        }
                                    ],
                                    marginTop: 0,
                                    marginTopSuffix: "px",
                                    margin: 0,
                                    marginBottom: 10,
                                    marginBottomSuffix: "px"
                                }
                            },
                            {
                                type: "Wrapper",
                                value: {
                                    _styles: [
                                        "wrapper",
                                        "wrapper--spacer"
                                    ],
                                    items: [
                                        {
                                            type: "Spacer",
                                            value: {
                                                _styles: [
                                                    "spacer"
                                                ]
                                            }
                                        }
                                    ],
                                    showOnMobile: "off"
                                }
                            },
                            {
                                type: "Row",
                                value: {
                                    _styles: [
                                        "row",
                                        "hide-row-borders",
                                        "padding-0"
                                    ],
                                    items: [
                                        {
                                            type: "Column",
                                            value: {
                                                _styles: [
                                                    "column"
                                                ],
                                                items: [
                                                    {
                                                        type: "Wrapper",
                                                        value: {
                                                            _styles: [
                                                                "wrapper",
                                                                "wrapper--iconText"
                                                            ],
                                                            items: [
                                                                {
                                                                    type: "Form2",
                                                                    value: {
                                                                        _styles: [
                                                                            "form"
                                                                        ],
                                                                        items: [
                                                                            {
                                                                                type: "Form2Fields",
                                                                                value: {
                                                                                    items: [
                                                                                        {
                                                                                            type: "Form2Field",
                                                                                            value: {
                                                                                                type: "Email",
                                                                                                label: "NAME & SURNAME",
                                                                                                required: "on",
                                                                                                options: [
                                                                                                    "Option 1",
                                                                                                    "Option 2"
                                                                                                ],
                                                                                                width: 50,
                                                                                                placeholder: "NAME & SURNAME"
                                                                                            }
                                                                                        },
                                                                                        {
                                                                                            type: "Form2Field",
                                                                                            value: {
                                                                                                type: "Email",
                                                                                                label: "EMAIL ADDRESS",
                                                                                                required: "on",
                                                                                                options: [
                                                                                                    "Option 1",
                                                                                                    "Option 2"
                                                                                                ],
                                                                                                width: 50,
                                                                                                placeholder: "EMAIL ADDRESS"
                                                                                            }
                                                                                        },
                                                                                        {
                                                                                            type: "Form2Field",
                                                                                            value: {
                                                                                                type: "Paragraph",
                                                                                                label: "MESSAGE",
                                                                                                required: "off",
                                                                                                options: [
                                                                                                    "Option 1",
                                                                                                    "Option 2"
                                                                                                ],
                                                                                                placeholder: "MESSAGE"
                                                                                            }
                                                                                        }
                                                                                    ],
                                                                                    fontStyle: "button",
                                                                                    tabsState: "",
                                                                                    tabsColor: "",
                                                                                    colorPalette: "color2",
                                                                                    tempColorPalette: "color2",
                                                                                    colorOpacity: 1,
                                                                                    colorHex: "#211c1c",
                                                                                    tempColorOpacity: 1,
                                                                                    borderColorPalette: "color2",
                                                                                    tempBorderColorPalette: "color2",
                                                                                    borderColorOpacity: 1,
                                                                                    borderStyle: "solid",
                                                                                    borderWidth: 1,
                                                                                    borderTopWidth: 1,
                                                                                    borderRightWidth: 1,
                                                                                    borderBottomWidth: 1,
                                                                                    borderLeftWidth: 1,
                                                                                    tempBorderTopWidth: 1,
                                                                                    tempBorderRightWidth: 1,
                                                                                    tempBorderBottomWidth: 1,
                                                                                    tempBorderLeftWidth: 1
                                                                                }
                                                                            },
                                                                            {
                                                                                type: "Button",
                                                                                value: {
                                                                                    _styles: [
                                                                                        "button",
                                                                                        "submit"
                                                                                    ],
                                                                                    text: "SUBMIT",
                                                                                    tabsState: "",
                                                                                    tabsColor: "",
                                                                                    iconName: "",
                                                                                    iconType: "",
                                                                                    colorPalette: "color2",
                                                                                    colorOpacity: 1,
                                                                                    hoverBgColorPalette: "color2",
                                                                                    hoverBgColorOpacity: 1,
                                                                                    hoverBorderColorPalette: "",
                                                                                    tempHoverBorderColorPalette: "",
                                                                                    hoverBgColorHex: "#211c1c",
                                                                                    tempHoverBgColorOpacity: 1,
                                                                                    tempHoverBgColorPalette: "color3",
                                                                                    hoverBorderColorHex: "#211c1c",
                                                                                    hoverBorderColorOpacity: 0
                                                                                }
                                                                            }
                                                                        ],
                                                                        submitWidth: 25,
                                                                        mobileSubmitWidth: 100,
                                                                        mobilePadding: 5,
                                                                        mobilePaddingRight: 5,
                                                                        mobilePaddingBottom: 5,
                                                                        mobilePaddingLeft: 5
                                                                    }
                                                                }
                                                            ]
                                                        }
                                                    }
                                                ],
                                                width: 70,
                                                borderWidthType: "ungrouped",
                                                paddingRight: 70,
                                                paddingRightSuffix: "px",
                                                padding: 15,
                                                paddingLeft: 35,
                                                paddingLeftSuffix: "px"
                                            }
                                        },
                                        {
                                            type: "Column",
                                            value: {
                                                _styles: [
                                                    "column"
                                                ],
                                                items: [
                                                    {
                                                        type: "Wrapper",
                                                        value: {
                                                            _styles: [
                                                                "wrapper",
                                                                "wrapper--richText"
                                                            ],
                                                            items: [
                                                                {
                                                                    type: "RichText",
                                                                    value: {
                                                                        _styles: [
                                                                            "richText"
                                                                        ],
                                                                        text: "<p class=\"brz-tp-abovetitle\"><span class=\"brz-cp-color2\">ADDRESS:</span></p>"
                                                                    }
                                                                }
                                                            ],
                                                            marginBottom: 0,
                                                            marginBottomSuffix: "px",
                                                            margin: 0
                                                        }
                                                    },
                                                    {
                                                        type: "Wrapper",
                                                        value: {
                                                            _styles: [
                                                                "wrapper",
                                                                "wrapper--richText"
                                                            ],
                                                            items: [
                                                                {
                                                                    type: "RichText",
                                                                    value: {
                                                                        _styles: [
                                                                            "richText"
                                                                        ],
                                                                        text: "<p class=\"brz-tp-paragraph\"><strong class=\"brz-cp-color2\">Opposite Croma, Road 36,&nbsp;</strong></p><p class=\"brz-tp-paragraph\"><strong class=\"brz-cp-color2\">Jubilee Hills, Hyderabad</strong></p>"
                                                                    }
                                                                }
                                                            ],
                                                            marginTop: 0,
                                                            marginTopSuffix: "px",
                                                            margin: 0
                                                        }
                                                    },
                                                    {
                                                        type: "Wrapper",
                                                        value: {
                                                            _styles: [
                                                                "wrapper",
                                                                "wrapper--spacer"
                                                            ],
                                                            items: [
                                                                {
                                                                    type: "Spacer",
                                                                    value: {
                                                                        _styles: [
                                                                            "spacer"
                                                                        ],
                                                                        height: 10
                                                                    }
                                                                }
                                                            ]
                                                        }
                                                    },
                                                    {
                                                        type: "Wrapper",
                                                        value: {
                                                            _styles: [
                                                                "wrapper",
                                                                "wrapper--richText"
                                                            ],
                                                            items: [
                                                                {
                                                                    type: "RichText",
                                                                    value: {
                                                                        _styles: [
                                                                            "richText"
                                                                        ],
                                                                        text: "<p class=\"brz-tp-abovetitle\"><span class=\"brz-cp-color2\">OPENING HOURS</span></p>"
                                                                    }
                                                                }
                                                            ],
                                                            marginBottom: 0,
                                                            marginBottomSuffix: "px",
                                                            margin: 0
                                                        }
                                                    },
                                                    {
                                                        type: "Wrapper",
                                                        value: {
                                                            _styles: [
                                                                "wrapper",
                                                                "wrapper--richText"
                                                            ],
                                                            items: [
                                                                {
                                                                    type: "RichText",
                                                                    value: {
                                                                        _styles: [
                                                                            "richText"
                                                                        ],
                                                                        text: "<p class=\"brz-tp-paragraph\"><strong class=\"brz-cp-color2\">12 Noon to 9 PM</strong></p>"
                                                                    }
                                                                }
                                                            ],
                                                            marginTop: 0,
                                                            marginTopSuffix: "px",
                                                            margin: 0
                                                        }
                                                    },
                                                    {
                                                        type: "Wrapper",
                                                        value: {
                                                            _styles: [
                                                                "wrapper",
                                                                "wrapper--spacer"
                                                            ],
                                                            items: [
                                                                {
                                                                    type: "Spacer",
                                                                    value: {
                                                                        _styles: [
                                                                            "spacer"
                                                                        ],
                                                                        height: 10
                                                                    }
                                                                }
                                                            ]
                                                        }
                                                    },
                                                    {
                                                        type: "Wrapper",
                                                        value: {
                                                            _styles: [
                                                                "wrapper",
                                                                "wrapper--richText"
                                                            ],
                                                            items: [
                                                                {
                                                                    type: "RichText",
                                                                    value: {
                                                                        _styles: [
                                                                            "richText"
                                                                        ],
                                                                        text: "<p class=\"brz-tp-abovetitle\"><span class=\"brz-cp-color2\">PHONE NUMBER:</span></p>"
                                                                    }
                                                                }
                                                            ],
                                                            marginBottom: 0,
                                                            marginBottomSuffix: "px",
                                                            margin: 0
                                                        }
                                                    },
                                                    {
                                                        type: "Wrapper",
                                                        value: {
                                                            _styles: [
                                                                "wrapper",
                                                                "wrapper--richText"
                                                            ],
                                                            items: [
                                                                {
                                                                    type: "RichText",
                                                                    value: {
                                                                        _styles: [
                                                                            "richText"
                                                                        ],
                                                                        text: "<p class=\"brz-tp-paragraph\"><strong class=\"brz-cp-color2\">040 65868444</strong></p>"
                                                                    }
                                                                }
                                                            ],
                                                            marginTop: 0,
                                                            marginTopSuffix: "px",
                                                            margin: 0
                                                        }
                                                    },
                                                    {
                                                        type: "Wrapper",
                                                        value: {
                                                            _styles: [
                                                                "wrapper",
                                                                "wrapper--spacer"
                                                            ],
                                                            items: [
                                                                {
                                                                    type: "Spacer",
                                                                    value: {
                                                                        _styles: [
                                                                            "spacer"
                                                                        ],
                                                                        height: 20
                                                                    }
                                                                }
                                                            ]
                                                        }
                                                    },
                                                    {
                                                        type: "Cloneable",
                                                        value: {
                                                            _styles: [
                                                                "wrapper-clone",
                                                                "wrapper-clone--icon"
                                                            ],
                                                            items: [
                                                                {
                                                                    type: "Icon",
                                                                    value: {
                                                                        _styles: [
                                                                            "icon"
                                                                        ],
                                                                        name: "logo-fb-simple",
                                                                        type: "glyph",
                                                                        padding: 5,
                                                                        tempPadding: 5,
                                                                        borderRadius: 13,
                                                                        borderWidth: 0,
                                                                        borderRadiusType: "rounded",
                                                                        fillType: "filled",
                                                                        borderColorOpacity: 0,
                                                                        borderColorPalette: 0,
                                                                        bgColorOpacity: 1,
                                                                        bgColorPalette: "color5",
                                                                        tempBorderWidth: 3,
                                                                        hoverBgColorOpacity: 1,
                                                                        size: "custom",
                                                                        customSize: 15,
                                                                        colorPalette: "color8",
                                                                        colorOpacity: 1,
                                                                        hoverColorPalette: "color1",
                                                                        hoverColorOpacity: 1,
                                                                        hoverColorHex: "#0d0d0d",
                                                                        hoverBgColorPalette: "color3"
                                                                    }
                                                                },
                                                                {
                                                                    type: "Icon",
                                                                    value: {
                                                                        _styles: [
                                                                            "icon"
                                                                        ],
                                                                        name: "logo-twitter",
                                                                        type: "glyph",
                                                                        padding: 5,
                                                                        tempPadding: 5,
                                                                        borderRadius: 13,
                                                                        borderWidth: 0,
                                                                        borderRadiusType: "rounded",
                                                                        fillType: "filled",
                                                                        borderColorOpacity: 0,
                                                                        borderColorPalette: 0,
                                                                        bgColorOpacity: 1,
                                                                        bgColorPalette: "color5",
                                                                        tempBorderWidth: 3,
                                                                        hoverBgColorOpacity: 1,
                                                                        size: "custom",
                                                                        customSize: 15,
                                                                        colorPalette: "color8",
                                                                        colorOpacity: 1,
                                                                        hoverColorPalette: "color1",
                                                                        hoverColorOpacity: 1,
                                                                        hoverColorHex: "#0d0d0d",
                                                                        hoverBgColorPalette: "color3"
                                                                    }
                                                                },
                                                                {
                                                                    type: "Icon",
                                                                    value: {
                                                                        _styles: [
                                                                            "icon"
                                                                        ],
                                                                        name: "logo-pinterest",
                                                                        type: "glyph",
                                                                        padding: 5,
                                                                        tempPadding: 5,
                                                                        borderRadius: 13,
                                                                        borderWidth: 0,
                                                                        borderRadiusType: "rounded",
                                                                        fillType: "filled",
                                                                        borderColorOpacity: 0,
                                                                        borderColorPalette: 0,
                                                                        bgColorOpacity: 1,
                                                                        bgColorPalette: "color5",
                                                                        tempBorderWidth: 3,
                                                                        hoverBgColorOpacity: 1,
                                                                        size: "custom",
                                                                        customSize: 15,
                                                                        colorPalette: "color8",
                                                                        colorOpacity: 1,
                                                                        hoverColorPalette: "color1",
                                                                        hoverColorOpacity: 1,
                                                                        hoverColorHex: "#0d0d0d",
                                                                        hoverBgColorPalette: "color3"
                                                                    }
                                                                },
                                                                {
                                                                    type: "Icon",
                                                                    value: {
                                                                        _styles: [
                                                                            "icon"
                                                                        ],
                                                                        name: "logo-instagram",
                                                                        type: "glyph",
                                                                        padding: 5,
                                                                        tempPadding: 5,
                                                                        borderRadius: 13,
                                                                        borderWidth: 0,
                                                                        borderRadiusType: "rounded",
                                                                        fillType: "filled",
                                                                        borderColorOpacity: 0,
                                                                        borderColorPalette: 0,
                                                                        bgColorOpacity: 1,
                                                                        bgColorPalette: "color5",
                                                                        tempBorderWidth: 3,
                                                                        hoverBgColorOpacity: 1,
                                                                        size: "custom",
                                                                        customSize: 15,
                                                                        colorPalette: "color8",
                                                                        colorOpacity: 1,
                                                                        hoverColorPalette: "color1",
                                                                        hoverColorOpacity: 1,
                                                                        hoverColorHex: "#0d0d0d",
                                                                        hoverBgColorPalette: "color3"
                                                                    }
                                                                },
                                                                {
                                                                    type: "Icon",
                                                                    value: {
                                                                        _styles: [
                                                                            "icon"
                                                                        ],
                                                                        name: "logo-yelp",
                                                                        type: "glyph",
                                                                        padding: 5,
                                                                        tempPadding: 5,
                                                                        borderRadius: 13,
                                                                        borderWidth: 0,
                                                                        borderRadiusType: "rounded",
                                                                        fillType: "filled",
                                                                        borderColorOpacity: 0,
                                                                        borderColorPalette: 0,
                                                                        bgColorOpacity: 1,
                                                                        bgColorPalette: "color5",
                                                                        tempBorderWidth: 3,
                                                                        hoverBgColorOpacity: 1,
                                                                        size: "custom",
                                                                        customSize: 15,
                                                                        colorPalette: "color8",
                                                                        colorOpacity: 1,
                                                                        hoverColorPalette: "color1",
                                                                        hoverColorOpacity: 1,
                                                                        hoverColorHex: "#0d0d0d",
                                                                        hoverBgColorPalette: "color3"
                                                                    }
                                                                }
                                                            ],
                                                            horizontalAlign: "left"
                                                        }
                                                    }
                                                ],
                                                width: 30,
                                                borderWidthType: "ungrouped",
                                                borderLeftWidth: 1,
                                                borderWidth: 0,
                                                tempBorderRightWidth: 0,
                                                tempBorderTopWidth: 0,
                                                tempBorderBottomWidth: 0,
                                                tempBorderLeftWidth: 1,
                                                tempBorderWidth: 0,
                                                borderColorOpacity: 0.2,
                                                paddingLeft: 60,
                                                paddingLeftSuffix: "px",
                                                padding: 15,
                                                borderColorHex: "#595959",
                                                borderColorPalette: "color7",
                                                tempBorderColorOpacity: 0.2,
                                                borderTopWidth: 0,
                                                borderRightWidth: 0,
                                                borderBottomWidth: 0,
                                                borderRadius: 0,
                                                borderTopLeftRadius: 0,
                                                borderTopRightRadius: 0,
                                                borderBottomRightRadius: 0,
                                                borderBottomLeftRadius: 0,
                                                mobilePaddingRight: 10,
                                                mobilePaddingLeft: 10,
                                                paddingRight: 60,
                                                paddingRightSuffix: "px",
                                                verticalAlign: "top"
                                            }
                                        }
                                    ]
                                }
                            }
                        ],
                        paddingType: "ungrouped",
                        paddingTop: 90,
                        paddingBottom: 121,
                        padding: 75,
                        containerSize: 90
                    }
                }
            ],
            _thumbnailSrc: 383240,
            _thumbnailWidth: 600,
            _thumbnailHeight: 352,
            _thumbnailTime: 1573728066728
        },
        blockId: "Blank000Light"
    }
]}
};