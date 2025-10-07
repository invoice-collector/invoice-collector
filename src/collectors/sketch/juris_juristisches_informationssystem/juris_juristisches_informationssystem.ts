
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class JurisJuristischesInformationssystemCollector extends SketchCollector {

    static CONFIG = {
        id: "juris_juristisches_informationssystem",
        name: "Juris - Juristisches Informationssystem",
        description: "i18n.collectors.juris_juristisches_informationssystem.description",
        version: "0",
        website: "https://juris.de/jportal/nav/index.jsp#/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2854472.jpg",
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
        entryUrl: "https://juris.de/jportal/nav/index.jsp#/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(JurisJuristischesInformationssystemCollector.CONFIG);
    }
}
