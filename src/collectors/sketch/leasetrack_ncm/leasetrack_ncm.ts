
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class LeasetrackNcmCollector extends SketchCollector {

    static CONFIG = {
        id: "leasetrack_ncm",
        name: "LeaseTrack - NCM",
        description: "i18n.collectors.leasetrack_ncm.description",
        version: "0",
        website: "https://ncm.espaceclient.fineasy.com/group/ncm/factures-avoirs",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4593700.jpg",
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
        entryUrl: "https://ncm.espaceclient.fineasy.com/group/ncm/factures-avoirs",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LeasetrackNcmCollector.CONFIG);
    }
}
