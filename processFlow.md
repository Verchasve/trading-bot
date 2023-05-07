Initially create 2 different process. 

1. Create a process which consumes data periodically for all given Stocks exchange and Crypto. 
  > Step1. Create cron job which runs every 5 mins interval and pull data from all different Free version Stocks and crypto API. 

  > Step2. Create and maintain an Index for every stocks and crypto. Find a resourceful API to keep track of Historical data in order to view Delta values for any given timestamps. 
  
  > Step 3: Write a function that can load historical data for any given timestamp and able to provide delta values for all Stocks and Crypto. 
        
  > Step 4: Build ML model from OpenAI, which uses data from the APIs.

 * Build a service which can convert Rest data into ML data format.
 
 * Identify the current market situation ( Social media , news and other factors which can affect the future market ). Possibly create a service which can generate some probability score / index based on different factors and able to include that in DMs. 


2. Create a Decision Making Serive ( DMS ).
   * Using ML data able to comprehend the current Market situation and able to make decisions to sell or buy stocks. 
   * Should send a notification for approval in order to make a transaction in initial stage.

   


