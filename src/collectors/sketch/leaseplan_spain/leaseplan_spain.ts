
import { SketchCollector } from '../../sketchCollector';

export class LeaseplanSpainCollector extends SketchCollector {

    static CONFIG = {
        id: "leaseplan_spain",
        name: "LeasePlan Spain",
        description: "i18n.collectors.leaseplan_spain.description",
        version: "0",
        website: "https://leaseplan.gestionaturenting.es/serviciosonline/ov2/empresa/facturacion.xhtml",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/778150.jpg",
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
        entryUrl: "https://leaseplan.gestionaturenting.es/serviciosonline/ov2/empresa/facturacion.xhtml",
    }

    constructor() {
        super(LeaseplanSpainCollector.CONFIG);
    }
}
