
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class JanitosCollector extends SketchCollector {

    static CONFIG = {
        id: "janitos",
        name: "Janitos",
        description: "i18n.collectors.janitos.description",
        version: "0",
        website: "https://portal-a.janitos.de/std/module/such_module/suche_ib/vm_abrechnung_controller.html?RID=1673564465773&RWN=vermittlerabrechnung&posUrl=https://portal-a.janitos.de/global/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1668195.jpg",
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
        entryUrl: "https://portal-a.janitos.de/std/module/such_module/suche_ib/vm_abrechnung_controller.html?RID=1673564465773&RWN=vermittlerabrechnung&posUrl=https://portal-a.janitos.de/global/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(JanitosCollector.CONFIG);
    }
}
