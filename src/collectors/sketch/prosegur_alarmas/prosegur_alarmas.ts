
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ProsegurAlarmasCollector extends SketchCollector {

    static CONFIG = {
        id: "prosegur_alarmas",
        name: "Prosegur Alarmas",
        description: "i18n.collectors.prosegur_alarmas.description",
        version: "0",
        website: "https://alarmas.movistarproseguralarmas.es/smart-mv/#!/invoice",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3200679.jpg",
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
        entryUrl: "https://alarmas.movistarproseguralarmas.es/smart-mv/#!/invoice",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ProsegurAlarmasCollector.CONFIG);
    }
}
