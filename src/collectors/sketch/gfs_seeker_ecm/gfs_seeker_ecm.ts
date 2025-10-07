
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class GfsSeekerEcmCollector extends SketchCollector {

    static CONFIG = {
        id: "gfs_seeker_ecm",
        name: "GFS - Seeker ECM",
        description: "i18n.collectors.gfs_seeker_ecm.description",
        version: "0",
        website: "https://ecm.gfsdeliver.com/portal/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4514563.jpg",
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
        entryUrl: "https://ecm.gfsdeliver.com/portal/invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GfsSeekerEcmCollector.CONFIG);
    }
}
