
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class NewfoundlandAndLabradorHydroCollector extends SketchCollector {

    static CONFIG = {
        id: "newfoundland_and_labrador_hydro",
        name: "Newfoundland and Labrador Hydro",
        description: "i18n.collectors.newfoundland_and_labrador_hydro.description",
        version: "0",
        website: "https://bids.nalcorenergy.com/Module/Tenders/en/Login/Index/62546bf9-ce4a-411f-9ac3-fc2a5ada7389",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8881.jpg",
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
        entryUrl: "https://bids.nalcorenergy.com/Module/Tenders/en/Login/Index/62546bf9-ce4a-411f-9ac3-fc2a5ada7389",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(NewfoundlandAndLabradorHydroCollector.CONFIG);
    }
}
