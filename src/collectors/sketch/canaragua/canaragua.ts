
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class CanaraguaCollector extends SketchCollector {

    static CONFIG = {
        id: "canaragua",
        name: "canaragua",
        description: "i18n.collectors.canaragua.description",
        version: "0",
        website: "https://www.canaragua.es/group/canaragua/mis-facturas?p_p_id=MisFacturas&p_p_lifecycle=1&p_p_state=normal&p_p_mode=view&_MisFacturas_javax.portlet.action=verFactura&_MisFacturas_view=factura&p_auth=d4eEb6GN&_MisFacturas_numeroContrato=10885059&_MisFactura",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1470084.jpg",
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
        loginUrl: "https://www.canaragua.es/group/canaragua/mis-facturas?p_p_id=MisFacturas&p_p_lifecycle=1&p_p_state=normal&p_p_mode=view&_MisFacturas_javax.portlet.action=verFactura&_MisFacturas_view=factura&p_auth=d4eEb6GN&_MisFacturas_numeroContrato=10885059&_MisFactura",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(CanaraguaCollector.CONFIG);
    }
}
