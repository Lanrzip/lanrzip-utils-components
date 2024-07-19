# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class LanrzipSlick(Component):
    """A LanrzipSlick component.


Keyword arguments:

- children (a list of or a singular dash component, string or number; optional)

- id (string; optional)

- accessibility (boolean; default True)

- adaptiveHeight (boolean; default False)

- arrows (boolean; default True)

- asNavFor (dict; optional)

- autoplay (boolean; default False)

- autoplaySpeed (number; default 3000)

- centerMode (boolean; default False)

- centerPadding (string; default '50px')

- className (string; optional)

- dots (boolean; default True)

- dotsClass (string; optional)

- draggable (boolean; default True)

- easing (string; default 'linear')

- fade (boolean; default False)

- focusOnSelect (boolean; default False)

- infinite (boolean; default True)

- initialSlide (number; default 0)

- lazyLoad (a value equal to: 'ondemand', 'progressive'; optional)

- pauseOnDotsHover (boolean; default False)

- pauseOnFocus (boolean; default False)

- pauseOnHover (boolean; default True)

- responsive (list; optional)

- rows (number; default 1)

- rtl (boolean; default False)

- slide (string; default 'div')

- slidesPerRow (number; default 1)

- slidesToScroll (number; default 1)

- slidesToShow (number; default 1)

- speed (number; default 500)

- swipe (boolean; default True)

- swipeToSlide (boolean; default False)

- touchMove (boolean; default True)

- touchThreshold (number; default 5)

- useCSS (boolean; default True)

- useTransform (boolean; default True)

- variableWidth (boolean; default False)

- vertical (boolean; default False)"""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'lanrzip_utils_components'
    _type = 'LanrzipSlick'
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, className=Component.UNDEFINED, accessibility=Component.UNDEFINED, adaptiveHeight=Component.UNDEFINED, arrows=Component.UNDEFINED, asNavFor=Component.UNDEFINED, autoplay=Component.UNDEFINED, autoplaySpeed=Component.UNDEFINED, centerMode=Component.UNDEFINED, centerPadding=Component.UNDEFINED, dots=Component.UNDEFINED, dotsClass=Component.UNDEFINED, draggable=Component.UNDEFINED, easing=Component.UNDEFINED, fade=Component.UNDEFINED, focusOnSelect=Component.UNDEFINED, infinite=Component.UNDEFINED, initialSlide=Component.UNDEFINED, lazyLoad=Component.UNDEFINED, pauseOnDotsHover=Component.UNDEFINED, pauseOnFocus=Component.UNDEFINED, pauseOnHover=Component.UNDEFINED, responsive=Component.UNDEFINED, rows=Component.UNDEFINED, rtl=Component.UNDEFINED, slide=Component.UNDEFINED, slidesPerRow=Component.UNDEFINED, slidesToScroll=Component.UNDEFINED, slidesToShow=Component.UNDEFINED, speed=Component.UNDEFINED, swipe=Component.UNDEFINED, swipeToSlide=Component.UNDEFINED, touchMove=Component.UNDEFINED, touchThreshold=Component.UNDEFINED, useCSS=Component.UNDEFINED, useTransform=Component.UNDEFINED, variableWidth=Component.UNDEFINED, vertical=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'accessibility', 'adaptiveHeight', 'arrows', 'asNavFor', 'autoplay', 'autoplaySpeed', 'centerMode', 'centerPadding', 'className', 'dots', 'dotsClass', 'draggable', 'easing', 'fade', 'focusOnSelect', 'infinite', 'initialSlide', 'lazyLoad', 'pauseOnDotsHover', 'pauseOnFocus', 'pauseOnHover', 'responsive', 'rows', 'rtl', 'slide', 'slidesPerRow', 'slidesToScroll', 'slidesToShow', 'speed', 'swipe', 'swipeToSlide', 'touchMove', 'touchThreshold', 'useCSS', 'useTransform', 'variableWidth', 'vertical']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'accessibility', 'adaptiveHeight', 'arrows', 'asNavFor', 'autoplay', 'autoplaySpeed', 'centerMode', 'centerPadding', 'className', 'dots', 'dotsClass', 'draggable', 'easing', 'fade', 'focusOnSelect', 'infinite', 'initialSlide', 'lazyLoad', 'pauseOnDotsHover', 'pauseOnFocus', 'pauseOnHover', 'responsive', 'rows', 'rtl', 'slide', 'slidesPerRow', 'slidesToScroll', 'slidesToShow', 'speed', 'swipe', 'swipeToSlide', 'touchMove', 'touchThreshold', 'useCSS', 'useTransform', 'variableWidth', 'vertical']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(LanrzipSlick, self).__init__(children=children, **args)
