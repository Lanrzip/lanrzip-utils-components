import lanrzip_utils_components as luc
from dash import Dash, callback, html, Input, Output

app = Dash(__name__)

app.layout = html.Div([
    # luc.LanrzipUtilsComponents(
    #     id='input',
    #     value='graph TD\n    A[Christmas] -->|Get money| B(Go shopping)\n    B --> C{Let me think}\n    C -->|One| D[Laptop]\n    C -->|Two| E[iPhone]\n    C -->|Three| F[fa:fa-car Car]\n',
    #     label='my-label'
    # ),
    # html.Div(id='output'),
    # luc.LanrzipMermaid(
    #     id='mermaid',
    #     value='graph TD\n    A[Christmas] -->|Get money| B(Go shopping)\n    B --> C{Let me think}\n    C -->|One| D[Laptop]\n    C -->|Two| E[iPhone]\n    C -->|Three| F[fa:fa-car Car]\n'
    
    # ),
    # luc.LanrzipSelectPopup(
    #     html.Div('Select Popup'),
    #     id='select-popup',
    # ),
    luc.LanrzipSlick(
        [
            html.Div(
                f'Item {i}',
                style={
                    'height': '40px',
                    'width': '40px',
                    'background-color': 'lightblue'
                }
            )
            for i in range(10)
        ],
        className='center',
        centerMode=True,
        infinite=True,
        centerPadding='20px',
        slidesToShow=7,
        speed=500,
        dots=False,
        focusOnSelect=True,
    )
])


# @callback(Output('output', 'children'), Input('input', 'value'))
# def display_output(value):
#     return 'You have entered {}'.format(value)


if __name__ == '__main__':
    app.run_server(debug=True)
