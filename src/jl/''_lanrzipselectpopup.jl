# AUTO GENERATED FILE - DO NOT EDIT

export ''_lanrzipselectpopup

"""
    ''_lanrzipselectpopup(;kwargs...)
    ''_lanrzipselectpopup(children::Any;kwargs...)
    ''_lanrzipselectpopup(children_maker::Function;kwargs...)


A LanrzipSelectPopup component.

Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): The children of this component
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
"""
function ''_lanrzipselectpopup(; kwargs...)
        available_props = Symbol[:children, :id]
        wild_props = Symbol[]
        return Component("''_lanrzipselectpopup", "LanrzipSelectPopup", "lanrzip_utils_components", available_props, wild_props; kwargs...)
end

''_lanrzipselectpopup(children::Any; kwargs...) = ''_lanrzipselectpopup(;kwargs..., children = children)
''_lanrzipselectpopup(children_maker::Function; kwargs...) = ''_lanrzipselectpopup(children_maker(); kwargs...)

