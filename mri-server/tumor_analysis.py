import os.path

import cv2
import numpy
from flask import Flask, request, abort, jsonify, render_template
from tensorflow.keras.models import load_model


class Base:
    def __init__(self, model, size=32):
        if not os.path.exists(model):
            raise Exception(f"The model that was suppose to located on the path '{model}' does not exist.")
        self.model = load_model(model)
        self.size = size
    
    def check_this(self, img):
        img = numpy.frombuffer(img, numpy.uint8)
        img = cv2.imdecode(img, cv2.IMREAD_COLOR)
        img = cv2.resize(img, (self.size, self.size)) / 255.0
        img = numpy.expand_dims(img, axis=0)
        return self.model.predict(img)[0][0]


class IsABrain(Base):
    def __init__(self, model, size=32):
        super().__init__(model, size)


class IsAEncephalitis(Base):
    def __init__(self, model, size=32):
        super().__init__(model, size)


class IsAGlioblastoma(Base):
    def __init__(self, model, size=32):
        super().__init__(model, size)


class IsAGlioma(Base):
    def __init__(self, model, size=32):
        super().__init__(model, size)


class IsAMedulloBlastoma(Base):
    def __init__(self, model, size=32):
        super().__init__(model, size)


class IsAMeningioma(Base): 
    def __init__(self, model, size=32):
        super().__init__(model, size)


class IsAMetastasis(Base):
    def __init__(self, model, size=32):
        super().__init__(model, size)


class IsAPilocyticAstrocytoma(Base):
    def __init__(self, model, size=32):
        super().__init__(model, size)


class Common:
    @staticmethod
    def getJson(of, throw=True):
        json_ = request.json if request.is_json else {}
        kmn = json_.get(of)
        if kmn:
            return kmn
        if throw:
            abort(400, description="The server expected a proper json with request, Never Found!")

    @staticmethod
    def getArgs(of, throw=True):
        arg = request.args.get(of)
        if arg:
            return arg
        if throw:
            return abort(400, description="The server expected a proper arg with request, Never Found!")

    @staticmethod
    def getFile(of, throw=True):
        file = request.files.get(of)
        if file:
            return file
        if throw:
            return abort(400, description="The server expected a proper attached file with request, Never Found!")

    @staticmethod
    def handelHardException(_executable: callable, val=False, ignore_val=False):
        try:
            _executable = _executable()
            _tp = type(_executable)
            if _tp not in [str, dict, list, tuple]:
                raise Warning("The executable function returned a un-recognized datatype.")
            if val:
                return _executable, 200
            else:
                if _executable and not ignore_val:
                    raise Warning(
                        "Got returnable value from callable function. Pass ('val=True' or 'ignore_val=True') as arg to remove this warning.")
                return '', 200

        except Exception as e:
            return jsonify({
                "error": str(e)
            }), 500


class Handler:
    def __init__(self, models: dict[str: str]):
        self.model_path = models
        self.tumor_meta_data = {
            "pilocytic_astrocytoma": {
                "symptoms": "seizures, persistent headaches, nausea, vomiting, visual disturbances, cognitive difficulties, and problems with movement or balance",
                "cancerous": "Yes",
                "age_group": "children and young adults",
                "origin": "arises from astrocytes, often in the cerebellum",
                "treatment": "surgical removal, radiation therapy if needed",
                "prognosis": "generally favorable with complete resection"
            },
            "medulloblastoma": {
                "symptoms": "persistent headaches, nausea (especially in the morning), balance and coordination issues, vision problems, and cognitive changes, particularly in children",
                "cancerous": "Yes",
                "age_group": "children",
                "origin": "develops in the cerebellum, often spreads through cerebrospinal fluid",
                "treatment": "surgery, radiation, chemotherapy",
                "prognosis": "variable; better for localized tumors"
            },
            "glioblastoma": {
                "symptoms": "persistent headaches, seizures, weakness or numbness (often on one side of the body), speech difficulties, memory loss, confusion, nausea, and difficulty walking or maintaining balance",
                "cancerous": "Yes",
                "age_group": "40-70 years",
                "origin": "arises from astrocytes, highly aggressive",
                "treatment": "surgery, radiation, chemotherapy (e.g., temozolomide)",
                "prognosis": "poor, with median survival around 15 months"
            },
            "meningioma": {
                "symptoms": "headaches, seizures, vision or hearing loss, weakness in limbs, and cognitive or memory problems",
                "cancerous": "No",
                "age_group": "adults, more common in women",
                "origin": "arises from meninges (membranes covering the brain and spinal cord)",
                "treatment": "surgical removal, radiation for residual or recurrent tumors",
                "prognosis": "excellent for benign tumors with complete resection"
            },
            "metastasis": {
                "symptoms": "headaches, seizures, nausea, vomiting, cognitive changes, weakness or numbness in limbs, vision problems, and speech difficulties",
                "cancerous": "Yes",
                "age_group": "varies; often seen in adults with systemic cancers",
                "origin": "secondary tumors, spread from cancers elsewhere in the body",
                "treatment": "targeted therapy, radiation, chemotherapy, surgery if feasible",
                "prognosis": "depends on primary cancer type and extent of spread"
            },
            "encephalitis": {
                "symptoms": "fever, headache, confusion, seizures, fatigue, and neurological deficits such as weakness or speech difficulties",
                "cancerous": "No",
                "age_group": "any age group",
                "origin": "inflammation of the brain, often viral (e.g., herpes simplex virus)",
                "treatment": "antiviral medications, corticosteroids, supportive care",
                "prognosis": "variable; early treatment improves outcomes"
            },
            "glioma": {
                "age_group": "young adults",
                "cancerous": "Yes",
                "origin": "arises from glial cells, slow-growing",
                "prognosis": "favorable compared to high-grade gliomas but risk of progression to higher grade",
                "symptoms": "seizures, persistent headaches, cognitive or memory changes, and focal neurological deficits depending on tumor location",
                "treatment": "surgery, radiation, and sometimes chemotherapy"
            }
        }
        self.isBrain = IsABrain(self.model_path.get("isBrain"))
        self.isEncephalitis = IsAEncephalitis(self.model_path.get("isEncephalitis"))
        self.isGlioblastoma = IsAGlioblastoma(self.model_path.get("isGlioblastoma"))
        self.isGlioma = IsAGlioma(self.model_path.get("isGlioma"))
        self.isMedulloblastoma = IsAMedulloBlastoma(self.model_path.get("isMedulloblastoma"))
        self.isMeningioma = IsAMeningioma(self.model_path.get("isMeningioma"))
        self.isMetastasis = IsAMetastasis(self.model_path.get("isMetastasis"))
        self.isPilocyticAstrocytoma = IsAPilocyticAstrocytoma(self.model_path.get("isPilocyticAstrocytoma"))

    def check_is_brain(self, img):
        img = img.read()
        return {"isBrain": "YB" if self.isBrain.check_this(img) > .5 else "NB"}
    
    def check_is_Encephalitis(self, img):
        img = img.read()
        return {"isEncephalitis": "YE" if self.isEncephalitis.check_this(img) > .5 else "NE"}
    
    def check_is_Glioblastoma(self, img):
        img = img.read()
        return {"isGlioblastoma": "YGB" if self.isGlioblastoma.check_this(img) > .5 else "NGB"}
    
    def check_is_Glioma(self, img):
        img = img.read()
        return {"isGlioma": "YGL" if self.isGlioma.check_this(img) > .5 else "NGL"}
   
    def check_is_Medulloblastoma(self, img):
        img = img.read()
        return {"isMedulloblastoma": "YMD" if self.isMedulloblastoma .check_this(img) > .5 else "NMD"}
    
    def check_is_Meningioma(self, img):
        img = img.read()
        return {"isMeningioma": "YMN" if self.isMeningioma .check_this(img) > .5 else "NMN"}
   
    def check_is_Metastasis(self, img):
        img = img.read()
        return {"isMetastasis": "YMT" if self.isMetastasis.check_this(img) > .5 else "NMT"}
       
    def check_is_Pilocytic_Astrocytoma(self, img):
        img = img.read()
        return {"isPilocyticAstrocytoma": "YP" if self.isPilocyticAstrocytoma.check_this(img) > .5 else "NP"}

    def check_type_of_tumor(self, img, args:dict):
        img = img.read()
        matrix = {}
        _hig = (0, "")
        

        if args.get("encephalitis"):
            _rq = self.isEncephalitis.check_this(img)
            if _rq > _hig[0]:
                _hig = (_rq, "encephalitis")
            matrix["encephalitis"] = str(_rq)
        
        if args.get("glioblastoma"):
            _rq = self.isGlioblastoma.check_this(img)
            if _rq > _hig[0]:
                _hig = (_rq, "glioblastoma")
            matrix["glioblastoma"] = str(_rq)
        
        if args.get("glioma"):
            _rq = self.isGlioma.check_this(img)
            if _rq > _hig[0]:
                _hig = (_rq, "glioma")
            matrix["glioma"] = str(_rq)
        
        if args.get("medulloblastoma"):
            _rq = self.isMedulloblastoma.check_this(img)
            if _rq > _hig[0]:
                _hig = (_rq, "medulloblastoma")
            matrix["medulloblastoma"] = str(_rq)
        
        if args.get("meningioma"):
            _rq = self.isMeningioma.check_this(img)
            if _rq > _hig[0]:
                _hig = (_rq, "meningioma")
            matrix["meningioma"] = str(_rq)
        
        if args.get("metastasis"):
            _rq = self.isMetastasis.check_this(img)
            if _rq > _hig[0]:
                _hig = (_rq, "metastasis")
            matrix["metastasis"] = str(_rq)
        
        if args.get("pilocytic_astrocytoma"):
            _rq = self.isPilocyticAstrocytoma.check_this(img)
            if _rq > _hig[0]:
                _hig = (_rq, "pilocytic_astrocytoma")
            matrix["pilocytic_astrocytoma"] = str(_rq)

        _type = (_hig[0] > .4 and _hig[1]) or "N/A"

        return {"matrix": matrix, "type": _type, "meta_data": self.tumor_meta_data.get(_type, {}), "confidence": str(_hig[0] * 100)[:5] + "%"}


_handler = Handler({
    "isBrain": "/home/rohan/Projects/ML/MRI/model/test_is_it_mri.keras",
    "isEncephalitis": "/home/rohan/Projects/ML/MRI/model/encephalitis.keras",
    "isGlioblastoma": "/home/rohan/Projects/ML/MRI/model/glioblastoma.keras",
    "isGlioma": "/home/rohan/Projects/ML/MRI/model/glioma.keras",
    "isMedulloblastoma": "/home/rohan/Projects/ML/MRI/model/medulloblastoma.keras",
    "isMeningioma": "/home/rohan/Projects/ML/MRI/model/meningioma.keras",
    "isMetastasis": "/home/rohan/Projects/ML/MRI/model/metastasis.keras",
    "isPilocyticAstrocytoma": "/home/rohan/Projects/ML/MRI/model/pilocytic_astrocytoma.keras",
})

_common = Common()


# App init
app = Flask(__name__)


@app.errorhandler(400)
def _400(e):
    return render_template('400.html', error_message=e.description), 400


# is brain slug
@app.route("/v1/neurovision/detect_brain", methods=["POST"])
def isBrain():
    return _common.handelHardException(lambda: _handler.check_is_brain(_common.getFile("file")), val=True)


@app.route("/v1/neurovision/check_mri", methods=["POST"])
def checkThisMRI():
    return _common.handelHardException(lambda: _handler.check_type_of_tumor(_common.getFile("file"), {
        "encephalitis": request.args.get("encephalitis", "1") == "1",
        "glioblastoma": request.args.get("glioblastoma", "1") == "1",
        "glioma": request.args.get("glioma", "1") == "1",
        "medulloblastoma": request.args.get("medulloblastoma", "1") == "1",
        "meningioma": request.args.get("meningioma", "1") == "1",
        "metastasis": request.args.get("metastasis", "1") == "1",
        "pilocytic_astrocytoma": request.args.get("pilocytic_astrocytoma", "1") == "1",
    }), val=True)


@app.after_request
def add_headers(response):
    response.headers['Access-Control-Allow-Origin'] = '*'
    response.headers['Access-Control-Allow-Headers'] = 'Content-Type, Origin, Accept'
    response.headers['Access-Control-Allow-Methods'] = 'GET, POST'
    return response


app.run(port=4000, debug=True)
