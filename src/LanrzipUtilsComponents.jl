
module LanrzipUtilsComponents
using Dash

const resources_path = realpath(joinpath( @__DIR__, "..", "deps"))
const version = "0.0.1"

include("jl/''_lanrziputilscomponents.jl")

function __init__()
    DashBase.register_package(
        DashBase.ResourcePkg(
            "lanrzip_utils_components",
            resources_path,
            version = version,
            [
                DashBase.Resource(
    relative_package_path = "async-LanrzipUtilsComponents.js",
    external_url = "https://unpkg.com/lanrzip_utils_components@0.0.1/lanrzip_utils_components/async-LanrzipUtilsComponents.js",
    dynamic = nothing,
    async = :true,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-LanrzipUtilsComponents.js.map",
    external_url = "https://unpkg.com/lanrzip_utils_components@0.0.1/lanrzip_utils_components/async-LanrzipUtilsComponents.js.map",
    dynamic = true,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "lanrzip_utils_components.min.js",
    external_url = nothing,
    dynamic = nothing,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "lanrzip_utils_components.min.js.map",
    external_url = nothing,
    dynamic = true,
    async = nothing,
    type = :js
)
            ]
        )

    )
end
end
