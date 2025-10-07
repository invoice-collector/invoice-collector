
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class InfocallerInfofaxCollector extends SketchCollector {

    static CONFIG = {
        id: "infocaller_infofax",
        name: "Infocaller / Infofax",
        description: "i18n.collectors.infocaller_infofax.description",
        version: "0",
        website: "https://infocaller.com/console/InMicuenta.aspx?gnid=639#",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1428802.jpg",
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
        entryUrl: "https://infocaller.com/console/InMicuenta.aspx?gnid=639#",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(InfocallerInfofaxCollector.CONFIG);
    }
}
