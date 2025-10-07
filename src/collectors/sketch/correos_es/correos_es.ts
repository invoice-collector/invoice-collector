
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class CorreosEsCollector extends SketchCollector {

    static CONFIG = {
        id: "correos_es",
        name: "Correos.es",
        description: "i18n.collectors.correos_es.description",
        version: "0",
        website: "https://epostal.correos.es/OV2PREENVWEB/jsp/_rlvid.jsp.faces?_rap=mov_listaRelacionesPagadasHandler.mostrarVista&om=1",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1436284.jpg",
        type: CollectorType.SKETCH,
        params: {
            email: {
                type: "email",
                name: "i18n.collectors.all.email",
                placeholder: "i18n.collectors.all.email.placeholder",
                mandatory: true
            },
            password: {
                type: "password",
                name: "i18n.collectors.all.password",
                placeholder: "i18n.collectors.all.password.placeholder",
                mandatory: true
            }
        },
        entryUrl: "https://epostal.correos.es/OV2PREENVWEB/jsp/_rlvid.jsp.faces?_rap=mov_listaRelacionesPagadasHandler.mostrarVista&om=1",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CorreosEsCollector.CONFIG);
    }
}
