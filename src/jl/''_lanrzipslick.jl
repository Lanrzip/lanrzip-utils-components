# AUTO GENERATED FILE - DO NOT EDIT

export ''_lanrzipslick

"""
    ''_lanrzipslick(;kwargs...)
    ''_lanrzipslick(children::Any;kwargs...)
    ''_lanrzipslick(children_maker::Function;kwargs...)


A LanrzipSlick component.

Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional)
- `id` (String; optional)
- `accessibility` (Bool; optional)
- `adaptiveHeight` (Bool; optional)
- `arrows` (Bool; optional)
- `asNavFor` (Dict; optional)
- `autoplay` (Bool; optional)
- `autoplaySpeed` (Real; optional)
- `centerMode` (Bool; optional)
- `centerPadding` (String; optional)
- `className` (String; optional)
- `dots` (Bool; optional)
- `dotsClass` (String; optional)
- `draggable` (Bool; optional)
- `easing` (String; optional)
- `fade` (Bool; optional)
- `focusOnSelect` (Bool; optional)
- `infinite` (Bool; optional)
- `initialSlide` (Real; optional)
- `lazyLoad` (a value equal to: 'ondemand', 'progressive'; optional)
- `pauseOnDotsHover` (Bool; optional)
- `pauseOnFocus` (Bool; optional)
- `pauseOnHover` (Bool; optional)
- `responsive` (Array; optional)
- `rows` (Real; optional)
- `rtl` (Bool; optional)
- `slide` (String; optional)
- `slidesPerRow` (Real; optional)
- `slidesToScroll` (Real; optional)
- `slidesToShow` (Real; optional)
- `speed` (Real; optional)
- `swipe` (Bool; optional)
- `swipeToSlide` (Bool; optional)
- `touchMove` (Bool; optional)
- `touchThreshold` (Real; optional)
- `useCSS` (Bool; optional)
- `useTransform` (Bool; optional)
- `variableWidth` (Bool; optional)
- `vertical` (Bool; optional)
"""
function ''_lanrzipslick(; kwargs...)
        available_props = Symbol[:children, :id, :accessibility, :adaptiveHeight, :arrows, :asNavFor, :autoplay, :autoplaySpeed, :centerMode, :centerPadding, :className, :dots, :dotsClass, :draggable, :easing, :fade, :focusOnSelect, :infinite, :initialSlide, :lazyLoad, :pauseOnDotsHover, :pauseOnFocus, :pauseOnHover, :responsive, :rows, :rtl, :slide, :slidesPerRow, :slidesToScroll, :slidesToShow, :speed, :swipe, :swipeToSlide, :touchMove, :touchThreshold, :useCSS, :useTransform, :variableWidth, :vertical]
        wild_props = Symbol[]
        return Component("''_lanrzipslick", "LanrzipSlick", "lanrzip_utils_components", available_props, wild_props; kwargs...)
end

''_lanrzipslick(children::Any; kwargs...) = ''_lanrzipslick(;kwargs..., children = children)
''_lanrzipslick(children_maker::Function; kwargs...) = ''_lanrzipslick(children_maker(); kwargs...)

