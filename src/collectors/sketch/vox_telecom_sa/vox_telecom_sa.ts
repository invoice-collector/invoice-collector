
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class VoxTelecomSaCollector extends SketchCollector {

    static CONFIG = {
        id: "vox_telecom_sa",
        name: "Vox Telecom SA",
        description: "i18n.collectors.vox_telecom_sa.description",
        version: "0",
        website: "https://www.vox.co.za/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/740315.jpg",
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
        entryUrl: "https://www.vox.co.za/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(VoxTelecomSaCollector.CONFIG);
    }
}
