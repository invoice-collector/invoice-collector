
import { SketchCollector } from '../../sketchCollector';

export class EnergiaVmCollector extends SketchCollector {

    static CONFIG = {
        id: "energia_vm",
        name: "Energia Vm",
        description: "i18n.collectors.energia_vm.description",
        version: "0",
        website: "https://suministro.energyavm.es/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4677233.jpg",
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
        entryUrl: "https://suministro.energyavm.es/",
    }

    constructor() {
        super(EnergiaVmCollector.CONFIG);
    }
}
