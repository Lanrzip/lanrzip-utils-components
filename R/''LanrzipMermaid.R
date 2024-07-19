# AUTO GENERATED FILE - DO NOT EDIT

#' @export
''LanrzipMermaid <- function(id=NULL, value=NULL) {
    
    props <- list(id=id, value=value)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'LanrzipMermaid',
        namespace = 'lanrzip_utils_components',
        propNames = c('id', 'value'),
        package = 'lanrzipUtilsComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
