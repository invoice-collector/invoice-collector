
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class RundfunkbeitragCollector extends SketchCollector {

    static CONFIG = {
        id: "rundfunkbeitrag",
        name: "Rundfunkbeitrag",
        description: "i18n.collectors.rundfunkbeitrag.description",
        version: "0",
        website: "https://portal.rundfunkbeitrag.de/portal/portal/kontostamm.xhtml",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/19835.jpg",
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
        entryUrl: "https://portal.rundfunkbeitrag.de/portal/portal/kontostamm.xhtml",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(RundfunkbeitragCollector.CONFIG);
    }
}
