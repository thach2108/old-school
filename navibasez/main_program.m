function varargout = main_program(varargin)
% MAIN_PROGRAM MATLAB code for main_program.fig
%      MAIN_PROGRAM, by itself, creates a new MAIN_PROGRAM or raises the existing
%      singleton*.
%
%      H = MAIN_PROGRAM returns the handle to a new MAIN_PROGRAM or the handle to
%      the existing singleton*.
%
%      MAIN_PROGRAM('CALLBACK',hObject,eventData,handles,...) calls the local
%      function named CALLBACK in MAIN_PROGRAM.M with the given input arguments.
%
%      MAIN_PROGRAM('Property','Value',...) creates a new MAIN_PROGRAM or raises the
%      existing singleton*.  Starting from the left, property value pairs are
%      applied to the GUI before main_program_OpeningFcn gets called.  An
%      unrecognized property name or invalid value makes property application
%      stop.  All inputs are passed to main_program_OpeningFcn via varargin.
%
%      *See GUI Options on GUIDE's Tools menu.  Choose "GUI allows only one
%      instance to run (singleton)".
%
% See also: GUIDE, GUIDATA, GUIHANDLES

% Edit the above text to modify the response to help main_program

% Last Modified by GUIDE v2.5 20-Oct-2018 11:06:37

% Begin initialization code - DO NOT EDIT   Kh?i t?o giao di?n
gui_Singleton = 1;
gui_State = struct('gui_Name',       mfilename, ...
                   'gui_Singleton',  gui_Singleton, ...
                   'gui_OpeningFcn', @main_program_OpeningFcn, ...
                   'gui_OutputFcn',  @main_program_OutputFcn, ...
                   'gui_LayoutFcn',  [] , ...
                   'gui_Callback',   []);
if nargin && ischar(varargin{1})
    gui_State.gui_Callback = str2func(varargin{1});
end

if nargout
    [varargout{1:nargout}] = gui_mainfcn(gui_State, varargin{:});
else
    gui_mainfcn(gui_State, varargin{:});  %kh?i t?o giao di?n
end
% End initialization code - DO NOT EDIT
% end khoi tao giao dien

% --- Executes just before main_program is made visible.
function main_program_OpeningFcn(hObject, eventdata, handles, varargin)
% This function has no output args, see OutputFcn.
% hObject    handle to figure
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)
% varargin   command line arguments to main_program (see VARARGIN)

% Choose default command line output for main_program
handles.output = hObject;
 
% Update handles structure
guidata(hObject, handles);

% UIWAIT makes main_program wait for user response (see UIRESUME)
% uiwait(handles.figure1);


% --- Outputs from this function are returned to the command line.
function varargout = main_program_OutputFcn(hObject, eventdata, handles) 
% varargout  cell array for returning output args (see VARARGOUT);
% hObject    handle to figure
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)

% Get default command line output from handles structure
varargout{1} = handles.output;


% --- Executes on button press in radHinh_thang.
function radHinh_thang_Callback(hObject, eventdata, handles)
% hObject    handle to radHinh_thang (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)

% Hint: get(hObject,'Value') returns toggle state of radHinh_thang


% --- Executes on button press in radSimpson.
function radSimpson_Callback(hObject, eventdata, handles)
% hObject    handle to radSimpson (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)

% Hint: get(hObject,'Value') returns toggle state of radSimpson



function edtFull_path_Callback(hObject, eventdata, handles)
% hObject    handle to edtFull_path (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)

% Hints: get(hObject,'String') returns contents of edtFull_path as text
%        str2double(get(hObject,'String')) returns contents of edtFull_path as a double


% --- Executes during object creation, after setting all properties.
function edtFull_path_CreateFcn(hObject, eventdata, handles)
% hObject    handle to edtFull_path (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    empty - handles not created until after all CreateFcns called

% Hint: edit controls usually have a white background on Windows.
%       See ISPC and COMPUTER.
if ispc && isequal(get(hObject,'BackgroundColor'), get(0,'defaultUicontrolBackgroundColor'))
    set(hObject,'BackgroundColor','white');
end


% --- Executes on button press in btnXac_dinh.
function btnXac_dinh_Callback(hObject, eventdata, handles) % thay th? thu?t toán ? 
% hObject    handle to btnXac_dinh (see GCBO)?ây
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)

file_name='databases/orl/s';
global exact_class;

LDA_Naivebasez_main();

file_name=strcat(file_name,num2str(exact_class),'/1.pgm');
X=imread(file_name);
axes(handles.axes2);
imshow(X);

% --- Executes on button press in btnDuyet.
function btnDuyet_Callback(hObject, eventdata, handles) % thay th? code ? ?ây
% hObject    handle to btnDuyet (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)
[filename, pathname, filterindex] = uigetfile({'*.pgm';'*.bmp';'*.jpg'},'Ch?n ?nh');
global full_path;
full_path=strcat(pathname,filename);
set(handles.edtFull_path,'string',full_path);
axes(handles.axes1);
global I;
I=imread(full_path);
imshow(I);

function edtSo_luong_anh_Callback(hObject, eventdata, handles)
% hObject    handle to edtSo_luong_anh (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)

% Hints: get(hObject,'String') returns contents of edtSo_luong_anh as text
%        str2double(get(hObject,'String')) returns contents of edtSo_luong_anh as a double


% --- Executes during object creation, after setting all properties.
function edtSo_luong_anh_CreateFcn(hObject, eventdata, handles)
% hObject    handle to edtSo_luong_anh (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    empty - handles not created until after all CreateFcns called

% Hint: edit controls usually have a white background on Windows.
%       See ISPC and COMPUTER.
if ispc && isequal(get(hObject,'BackgroundColor'), get(0,'defaultUicontrolBackgroundColor'))
    set(hObject,'BackgroundColor','white');
end


% --- Executes on button press in btnHuan_luyen.
function btnHuan_luyen_Callback(hObject, eventdata, handles)
% hObject    handle to btnHuan_luyen (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)
set(handles.txtThong_bao1,'string','Training!');
num_string=get(handles.edtSo_luong_anh,'string');

global numTrianing ;
global eigvector;

global training_data ;
global training_labels;

global test_nai_data ;
global test_nai_labels;
global numClass;

numClass = 40;

numTrianing = str2num(num_string);

[training_data,training_labels, test_nai_data, test_nai_labels] = ORL_PCA_process_data_m_n(numTrianing, 1);

options.Fisherface = 1; 
[eigvector, eigvalue] = LDA(training_data, training_labels, options);
%refer_Naive();
LDA_recognition(test_nai_data, test_nai_labels)
disp('Done training!');

set(handles.txtThong_bao1,'string','OK!');

% --- Executes on button press in btnKet_thuc.
function btnKet_thuc_Callback(hObject, eventdata, handles)
% hObject    handle to btnKet_thuc (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)
close();



function txtNguong_Callback(hObject, eventdata, handles)
% hObject    handle to txtNguong (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)

% Hints: get(hObject,'String') returns contents of txtNguong as text
%        str2double(get(hObject,'String')) returns contents of txtNguong as a double


% --- Executes during object creation, after setting all properties.
function txtNguong_CreateFcn(hObject, eventdata, handles)
% hObject    handle to txtNguong (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    empty - handles not created until after all CreateFcns called

% Hint: edit controls usually have a white background on Windows.
%       See ISPC and COMPUTER.
if ispc && isequal(get(hObject,'BackgroundColor'), get(0,'defaultUicontrolBackgroundColor'))
    set(hObject,'BackgroundColor','white');
end


% --- Executes on button press in btnHien_thi_anh_mo.
function btnHien_thi_anh_mo_Callback(hObject, eventdata, handles)
% hObject    handle to btnHien_thi_anh_mo (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)
