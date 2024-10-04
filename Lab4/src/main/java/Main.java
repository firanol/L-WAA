package com.example;

import com.example.model.*;
import com.example.util.JPAUtil;

import javax.persistence.EntityManager;

public class Main {
    public static void main(String[] args) {
        // Obtain an EntityManager
        EntityManager em = JPAUtil.getEntityManager();

        // Start a transaction
        em.getTransaction().begin();

        // Create and populate Doctor object
        Doctor doctor = new Doctor();
        doctor.setFirstname("John");
        doctor.setLastname("Doe");
        doctor.setDoctortype("Cardiologist");

        // Create and populate Patient object
        Patient patient = new Patient();
        patient.setName("Jane Doe");
        patient.setStreet("123 Main St");
        patient.setCity("Fairfield");
        patient.setZip("52557");

        // Create and populate Payment object
        Payment payment = new Payment();
        payment.setPaydate("2024-10-05");
        payment.setAmount(250.75);

        // Create and populate Appointment object
        Appointment appointment = new Appointment();
        appointment.setAppdate("2024-10-06");
        appointment.setDoctor(doctor);
        appointment.setPatient(patient);
        appointment.setPayment(payment);

        // Persist data into the database
        em.persist(doctor);
        em.persist(patient);
        em.persist(payment);
        em.persist(appointment);

        // Commit the transaction
        em.getTransaction().commit();

        // Close EntityManager
        em.close();

        System.out.println("Data inserted successfully.");
    }
}
