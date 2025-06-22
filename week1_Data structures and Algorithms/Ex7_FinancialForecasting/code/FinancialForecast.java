package Ex7_FinancialForecasting.code;

public class FinancialForecast {

    public static double forecastValue(double amount, double rate, int years) {
        if (years == 0) return amount;
        return forecastValue(amount, rate, years - 1) * (1 + rate);
    }

    public static double forecastIterative(double amount, double rate, int years) {
        for (int i = 0; i < years; i++) {
            amount *= (1 + rate);
        }
        return amount;
    }

    public static void main(String[] args) {
        double startingAmount = 8000.0;
        double annualRate = 0.07; 
        int years = 6;

        double result = forecastValue(startingAmount, annualRate, years);
        System.out.printf("Recursive forecast after %d years: ₹%.2f\n", years, result);

        double resultIter = forecastIterative(startingAmount, annualRate, years);
        System.out.printf("Iterative forecast after %d years: ₹%.2f\n", years, resultIter);
    }
}
