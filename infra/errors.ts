type ServiceErrorParams = {
  cause?: unknown;
  message?: string;
  action?: string;
  context?: unknown;
};

export class ServiceError extends Error {
  action: string;
  statusCode: number;
  context: unknown;

  constructor({ cause, message, action, context }: ServiceErrorParams) {
    super(message || "Serviço indisponível no momento.", {
      cause,
    });

    this.name = "ServiceError";
    this.action = action || "Verifique se o serviço está disponível.";
    this.statusCode = 503;
    this.context = context;
  }

  toJSON() {
    return {
      name: this.name,
      message: this.message,
      action: this.action,
      status_code: this.statusCode,
      context: this.context,
    };
  }
}
