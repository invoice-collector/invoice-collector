
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class VattenfallGeschaftskundenBundelportalCollector extends SketchCollector {

    static CONFIG = {
        id: "vattenfall_geschaftskunden_bundelportal",
        name: "Vattenfall Geschaftskunden Bundelportal",
        description: "i18n.collectors.vattenfall_geschaftskunden_bundelportal.description",
        version: "0",
        website: "https://portal.realestate.vattenfall.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1233087.jpg",
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
        entryUrl: "https://portal.realestate.vattenfall.de",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(VattenfallGeschaftskundenBundelportalCollector.CONFIG);
    }
}
