using Util;
using Util.Logging.Serilog;
using Util.Ui.NgZorro;

//����WebӦ�ó���������
var builder = WebApplication.CreateBuilder( args );

//����Util����
builder.AsBuild()
    .AddNgZorro( t => {
        t.RootPath = "ClientApp/dist/util";
        t.EnableDefaultOptionText = true;
    } )
    .AddSerilog()
    .AddUtil();

//����WebӦ�ó���
var app = builder.Build();

//��������ܵ�
app.UseNgZorro( "http://localhost:18888" );

//����Ӧ��
app.Run();