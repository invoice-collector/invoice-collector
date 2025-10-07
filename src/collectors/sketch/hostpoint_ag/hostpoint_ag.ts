
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class HostpointAgCollector extends SketchCollector {

    static CONFIG = {
        id: "hostpoint_ag",
        name: "Hostpoint AG",
        description: "i18n.collectors.hostpoint_ag.description",
        version: "0",
        website: "https://hostpoint.ch/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1188353.jpg",
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
        entryUrl: "https://hostpoint.ch/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(HostpointAgCollector.CONFIG);
    }
}
