# AUTO GENERATED FILE - DO NOT EDIT

#' @export
''LanrzipSelectPopup <- function(children=NULL, id=NULL) {
    
    props <- list(children=children, id=id)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'LanrzipSelectPopup',
        namespace = 'lanrzip_utils_components',
        propNames = c('children', 'id'),
        package = 'lanrzipUtilsComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
